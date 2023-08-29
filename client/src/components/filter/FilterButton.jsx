/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { getProductsArray } from "../../redux/actions/merchandiseActions";
import "./_filterButton.scss";

const styleButton = {
  fontFamily: "Mont",
  fontSize: "12px",
  fontWeight: "600",
  fontStyle: "normal",
  color: "#515554c5",
  borderColor: "#b3b9b8c5"
};

const styleButtonActive = {
  fontFamily: "Mont",
  fontSize: "12px",
  fontWeight: "600",
  fontStyle: "normal",
  color: "#0B3E36",
  borderColor: "#0B3E36"
};

const FilterButton = () => {
  const [stateBtn, setStateBtn] = useState({
    arabic: [styleButton, false],
    rabusta: [styleButton, false],
    average: [styleButton, false],
    dark: [styleButton, false],
    light: [styleButton, false]
  });
  const { page, sort, minPrice, maxPrice, brand, type } = useSelector(
    (state) => state.merchandise
  );
  const dispatch = useDispatch();
  const { arabic, rabusta, average, dark, light } = stateBtn;

  useEffect(() => {
    const grade = [];
    arabic[1] && grade.push("arabica");
    rabusta[1] && grade.push("robusta");
    const roasting = [];
    average[1] && roasting.push("medium");
    dark[1] && roasting.push("dark");
    light[1] && roasting.push("light");
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
  }, [dispatch, arabic[1], rabusta[1], average[1], dark[1], light[1]]);

  const stateChange = (stateButton, nameButton) => {
    stateButton[1]
      ? setStateBtn({ ...stateBtn, [nameButton]: [styleButton, false] })
      : setStateBtn({ ...stateBtn, [nameButton]: [styleButtonActive, true] });
  };

  return (
    <>
      <div className="filter__wrapper-sort">
        <p className="filter__name">Сорт</p>
        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            onClick={() => {
              stateChange(arabic, "arabic");
            }}
            style={arabic[0]}
          >
            Арабика
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              stateChange(rabusta, "rabusta");
            }}
            style={rabusta[0]}
          >
            Рабуста
          </Button>
        </Stack>
      </div>
      <div className="filter__wrapper-roasting">
        <p className="filter__name">Ступінь обсмажування</p>
        <Stack
          spacing={{ xs: 1, sm: 2 }}
          direction="row"
          useFlexGap
          flexWrap="wrap"
        >
          <Button
            variant="outlined"
            onClick={() => {
              stateChange(average, "average");
            }}
            style={average[0]}
          >
            середня
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              stateChange(dark, "dark");
            }}
            style={dark[0]}
          >
            темна
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              stateChange(light, "light");
            }}
            style={light[0]}
          >
            світла
          </Button>
        </Stack>
      </div>
    </>
  );
};

export default FilterButton;
