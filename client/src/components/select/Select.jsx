/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsArray } from "../../redux/actions/merchandise";
import "./_select.scss";

const Select = () => {
  const [sort, setSort] = useState(null);
  const { minPrice, maxPrice, page, grade, roasting, brand, type } = useSelector(
    (state) => state.merchandise
  );
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  useEffect(() => {
    dispatch(getProductsArray(page, sort, minPrice, maxPrice, grade, roasting, brand, type));
  }, [dispatch, sort]);

  return (
    <div>
      <label className="select__label" htmlFor="sort">
        Сортування:
      </label>
      <select name="sort" id="sort" onChange={handleChange}>
        <option value="null">Інше</option>
        <option value="+">Від дешевих</option>
        <option value="-">Від дорогих</option>
      </select>
    </div>
  );
};

export default Select;