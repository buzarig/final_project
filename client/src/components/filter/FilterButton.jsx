import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getProductsArray } from "../../redux/actions/merchandise";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
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
  const [styleArabic, setStyleArabic] = useState([styleButton, false]);
  const [styleRabust, setStyleRabust] = useState([styleButton, false]);
  const [styleAverage, setStyleAverage] = useState([styleButton, false]);
  const [styleDark, setStyleDark] = useState([styleButton, false]);
  const [styleLight, setStyleLight] = useState([styleButton, false]);
  const [styleHardDark, setStyleHardDark] = useState([styleButton, false]);
  const [styleMediumLight, setStyleMediumLight] = useState([
    styleButton,
    false
  ]);
  // const currentPage = useSelector((state) => state.merchandise.page);
  // const sort = useSelector((state) => state.merchandise.sort);
  // const minPrice = useSelector((state) => state.merchandise.minPrice);
  // const maxPrice = useSelector((state) => state.merchandise.maxPrice);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   !currentPage
  //     ? dispatch(getProductsArray(1, sort, minPrice, maxPrice, [styleArabic[1]&&"arabica"]))
  //     : dispatch(getProductsArray(currentPage, sort, minPrice, maxPrice, [styleArabic[1]&&"arabica"]));
  // }, [dispatch, minPrice, maxPrice, currentPage, sort]);

  const stateChange = (styleBtn, changeStyle) => {
    styleBtn[1]
      ? changeStyle([styleButton, false])
      : changeStyle([styleButtonActive, true]);
  };

  return (
    <>
      <div className="filter__wrapper-sort">
        <p className="filter__name">Сорт</p>
        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            onClick={() => {
              stateChange(styleArabic, setStyleArabic);
            }}
            style={styleArabic[0]}
          >
            Арабика
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              stateChange(styleRabust, setStyleRabust);
            }}
            style={styleRabust[0]}
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
              stateChange(styleAverage, setStyleAverage);
            }}
            style={styleAverage[0]}
          >
            середня
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              stateChange(styleDark, setStyleDark);
            }}
            style={styleDark[0]}
          >
            темна
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              stateChange(styleLight, setStyleLight);
            }}
            style={styleLight[0]}
          >
            світла
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              stateChange(styleHardDark, setStyleHardDark);
            }}
            style={styleHardDark[0]}
          >
            дуже темна
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              stateChange(styleMediumLight, setStyleMediumLight);
            }}
            style={styleMediumLight[0]}
          >
            світло середня
          </Button>
        </Stack>
      </div>
    </>
  );
};

export default FilterButton;
