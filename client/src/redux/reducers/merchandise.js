/* eslint-disable default-param-last */
import { merchandiseTypes } from "../types";

const initialState = {
  products: [],
  page: null,
  sort: null,
  minPrice: null,
  maxPrice: null
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