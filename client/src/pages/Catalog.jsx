import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Pagination } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import Cards from "../components/listCards/Cards";
import Search from "../components/search/Search";
import Select from "../components/select/Select";
import FilterSlider from "../components/filter/FilterSlider";
import FilterButton from "../components/filter/FilterButton";
import RadioButtonsFilter from "../components/filter/FilterRadio";
import useViewport from "../custom_hooks/viewport";

import { getProductsArray } from "../redux/actions/merchandise";

import filterBtn from "../assets/images/filter-button/filter.png";
import "../styles/_catalog.scss";

const Catalog = () => {
  const {products, sort, minPrice, maxPrice, grade, roasting, brand, type} = useSelector((state) => state.merchandise);
  const dispatch = useDispatch();

  function changePage(page) {
    dispatch(getProductsArray(page, sort, minPrice, maxPrice, grade, roasting, brand, type));
  }

  const [isFilterOpen, setFilterOpen] = useState(false);

  const toggleFilter = () => {
    setFilterOpen(!isFilterOpen);
  };

  const { width } = useViewport();
  const breakpoint = 1399;

  return (
    <div className="catalog">
      <div className="link_nav_catalog">
        <Link to="/home" className="general_link">
          Головна
        </Link>
        <span> / </span>
        <Link to="/catalog" className="catalog_link">
          Каталог
        </Link>
      </div>
      <h2 className="page__title">Каталог</h2>
      <hr className="line" />
      <div className="form">
        <Search />
        <Select />
        <button onClick={toggleFilter} type="button" className="filter_btn">
          <img src={filterBtn} alt="" />
        </button>
      </div>
      <div className="cards-list__wrapper">
        {products.length ? (
          <Cards products={products} />
        ) : (
          <h2>loading...</h2>
        )}

        {(width > breakpoint || isFilterOpen) && (
          <div className="sidebar">
            <FilterSlider filterName="Ціна" />
            <FilterButton />
            <RadioButtonsFilter />
          </div>
        )}
      </div>
      <Pagination
        count={2}
        onChange={(_, num) => changePage(num)}
        variant="outlined"
        shape="rounded"
      />
      <Outlet />
    </div>
  );
};
export default Catalog;