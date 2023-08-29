/* eslint-disable default-param-last */
import { merchandiseTypes } from "../types";

const initialState = {
  products: [],
  page: 1,
  sort: null,
  minPrice: 49.99,
  maxPrice: 479.99,
  grade: [],
  roasting: [],
  brand: [],
  type: []
};

export function merchandiseReducer(state = initialState, action) {
  switch (action.type) {
    case merchandiseTypes.GET_ALL_PRODUCTS:
      return {
        ...action.payload
      };
    default:
      return state;
  }
}