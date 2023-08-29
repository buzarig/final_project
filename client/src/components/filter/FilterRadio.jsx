/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { getProductsArray } from "../../redux/actions/merchandiseActions";

const styleFormLabel = {
  fontFamily: "Mont",
  fontSize: "19px",
  fontWeight: "600",
  fontStyle: "normal",
  color: "black"
};

const styleGroup = {
  height: "170px",
  width: "200px",
  borderBottom: "1px solid #b3b9b857",
  marginBottom: "18px"
};

const styleCheckLabel = {
  ".MuiFormControlLabel-label": {
    fontFamily: "Mont",
    fontSize: "16px",
    fontWeight: "600",
    fontStyle: "normal",
    color: "#515554c5"
  }
};
const styleCheckbox = { "&.Mui-checked": { color: "#0B3E36" } };

const RadioButtonsFilter = () => {
  const [stateCheck, setStateCheck] = useState({
    lavazza: false,
    alvorada: false,
    primaItaliano: false,
    instant: false,
    ground: false,
    inGrains: false
  });
  const { page, sort, minPrice, maxPrice, grade, roasting } = useSelector(
    (state) => state.merchandise
  );
  const dispatch = useDispatch();

  const stateChange = (event) => {
    event.target.checked
      ? setStateCheck({ ...stateCheck, [event.target.value]: true })
      : setStateCheck({ ...stateCheck, [event.target.value]: false });
  };

  const { lavazza, alvorada, primaItaliano, instant, ground, inGrains } =
    stateCheck;

  useEffect(() => {
    const brand = [];
    lavazza && brand.push("Lavazza");
    alvorada && brand.push("Alvorada");
    primaItaliano && brand.push("Prima Italiano");
    const type = [];
    instant && type.push("instant");
    ground && type.push("ground");
    inGrains && type.push("in_grains");
    dispatch(
      getProductsArray(
        page,
        sort,
        minPrice,
        maxPrice,
        grade,
        roasting,
        brand,
        type
      )
    );
  }, [dispatch, lavazza, alvorada, primaItaliano, instant, ground, inGrains]);

  return (
    <>
      <FormGroup style={styleGroup}>
        <FormLabel id="demo-radio-buttons-group-label" style={styleFormLabel}>
          Бренди
        </FormLabel>
        <FormControlLabel
          value="lavazza"
          control={<Checkbox sx={styleCheckbox} onChange={stateChange} />}
          label="Lavazza"
          sx={{ ...styleCheckLabel }}
        />
        <FormControlLabel
          value="alvorada"
          control={<Checkbox sx={styleCheckbox} onChange={stateChange} />}
          label="Alvorada"
          sx={{ ...styleCheckLabel }}
        />
        <FormControlLabel
          value="primaItaliano"
          control={<Checkbox sx={styleCheckbox} onChange={stateChange} />}
          label="Prima Italiano"
          sx={{ ...styleCheckLabel }}
        />
      </FormGroup>
      <FormGroup style={styleGroup}>
        <FormLabel id="demo-radio-buttons-group-label" style={styleFormLabel}>
          Тип
        </FormLabel>
        <FormControlLabel
          value="ground"
          control={<Checkbox sx={styleCheckbox} onChange={stateChange} />}
          label="мелена"
          sx={{ ...styleCheckLabel }}
        />
        <FormControlLabel
          value="inGrains"
          control={<Checkbox sx={styleCheckbox} onChange={stateChange} />}
          label="в зернах"
          sx={{ ...styleCheckLabel }}
        />
        <FormControlLabel
          value="instant"
          control={<Checkbox sx={styleCheckbox} onChange={stateChange} />}
          label="розчинна"
          sx={{ ...styleCheckLabel }}
        />
      </FormGroup>
    </>
  );
};

export default RadioButtonsFilter;
