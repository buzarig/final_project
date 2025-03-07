/* eslint-disable no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable react/destructuring-assignment

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import MuiInput from "@mui/material/Input";
import { getProductsArray } from "../../redux/actions/merchandiseActions";
import "./_filterSlider.scss";

const PriceSlider = styled(Slider)(({ theme }) => ({
  color: "#0B3E36",
  height: 15,
  padding: "13px 0",
  "& .MuiSlider-thumb": {
    height: 27,
    width: 27,
    backgroundColor: "#fff",
    border: "1px solid currentColor",
    "&:hover": {
      boxShadow: "0 0 0 8px rgba(58, 133, 137, 0.16)"
    },
    "& .airbnb-bar": {
      height: 9,
      width: 1,
      backgroundColor: "currentColor",
      marginLeft: 1,
      marginRight: 1
    }
  },
  "& .MuiSlider-track": {
    height: 3
  },
  "& .MuiSlider-rail": {
    color: theme.palette.mode === "dark" ? "#bfbfbf" : "#d8d8d8",
    opacity: theme.palette.mode === "dark" ? undefined : 1,
    height: 3
  }
}));

const Input = styled(MuiInput)`
  font-family: Mont;
  font-size: 19px;
  font-weight: 600;
  font-style: normal;
  margin-bottom: 15px;
  padding-left: 10px;
  padding-top: 4px;
  width: 76px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #00000061;
`;

const FilterSlider = ({ filterName }) => {
  const [value, setValue] = useState([49.99, 479.99]);
  const { page, sort, grade, roasting, brand, type } = useSelector(
    (state) => state.merchandise
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getProductsArray(
        page,
        sort,
        value[0],
        value[1],
        grade,
        roasting,
        brand,
        type
      )
    );
  }, [dispatch, value]);

  const handleChange = (event, newValue) => {
    let minValue = value[0] !== newValue[0] ? newValue[0] - 0.01 : newValue[0];
    let maxValue = value[1] !== newValue[1] ? newValue[1] - 0.01 : newValue[1];
    maxValue === 479.98 && (maxValue += 0.01);
    minValue < 49.99 && (minValue = 49.99);
    setValue([minValue, maxValue]);
  };

  const handleInputChangeMin = (event) => {
    setValue([
      event.target.value === "" ? "" : Number(event.target.value),
      value[1]
    ]);
  };

  const handleInputChangeMax = (event) => {
    setValue([
      value[0],
      event.target.value === "" ? "" : Number(event.target.value)
    ]);
  };

  return (
    <div className="filter__wrapper">
      <p className="filter__name">{filterName}</p>
      <Box sx={{ width: 200 }}>
        <PriceSlider
          getAriaLabel={() => "Temperature range"}
          value={value}
          min={49.99}
          max={479.99}
          step={10}
          onChange={handleChange}
          valueLabelDisplay="auto"
        />
      </Box>
      <div className="filter__wrapper-inputs">
        <Input
          value={value[0]}
          size="small"
          onChange={handleInputChangeMin}
          inputProps={{
            step: 10,
            min: 49.99,
            max: 479.99,
            type: "number",
            "aria-labelledby": "input-slider"
          }}
        />
        <span className="filter__hyphen">-</span>
        <Input
          value={value[1]}
          size="small"
          onChange={handleInputChangeMax}
          inputProps={{
            step: 10,
            min: 49.99,
            max: 479.99,
            type: "number",
            "aria-labelledby": "input-slider"
          }}
        />
      </div>
    </div>
  );
};

export default FilterSlider;
