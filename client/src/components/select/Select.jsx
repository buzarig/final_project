/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsArray } from "../../redux/actions/merchandise";
import "./_select.scss";

const Select = () => {
  const [sort, setSort] = useState(null);
  const currentPage = useSelector((state) => state.merchandise.page);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setSort(event.target.value);
    
  };

  useEffect(() => {
    !currentPage ? dispatch(getProductsArray(1, sort)) : dispatch(getProductsArray(currentPage, sort));
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
