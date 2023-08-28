import api from "../../http/api";
import { merchandiseTypes } from "../types";

export function getAllProducts(
  products,
  page,
  sort,
  minPrice,
  maxPrice,
  grade,
  roasting,
  brand,
  type
) {
  return {
    type: merchandiseTypes.GET_ALL_PRODUCTS,
    payload: {
      products,
      page,
      sort,
      minPrice,
      maxPrice,
      grade,
      roasting,
      brand,
      type
    }
  };
}

export const getProductsArray =
  (
    page,
    sort,
    minPrice,
    maxPrice,
    grade = [],
    roasting = [],
    brand = [],
    type = []
  ) =>
  async (dispatch) => {
    try {
      const data = await api
        .get(
          `/products/filter?minPrice=${minPrice}${
            type.length && `&type=${type}`
          }&maxPrice=${maxPrice}${grade.length && `&grade=${grade}`}${
            roasting.length ? `&degree_of_roasting=${roasting}&` : "&"
          }${
            brand.length ? `brand=${brand}&per` : "per"
          }Page=9&startPage=${page}&sort=${sort}currentPrice`
        )
        .then((products) => products);
      dispatch(
        getAllProducts(
          data.data.products,
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
    } catch (error) {
      console.log(error);
    }
  };

// приклад для фільтру тільки на сторінках(https://youtu.be/34Wyw5155v4?t=6880)

// обране (на перспективу)

// export function addProductToFavorite(product) {
//   return {
//     type: merchandiseTypes.ADD_PRODUCT_TO_FAVORITE,
//     payload: {
//       product,
//     },
//   };
// }

// export function removeProductFromFavorite(article) {
//   return {
//     type: merchandiseTypes.REMOVE_PRODUCT_FROM_FAVORITE,
//     payload: {
//       article,
//     },
//   };
// }
