import api from "../../http/api";
import { merchandiseTypes } from "../types";

export function getAllProducts(
  products,
  page,
  sort,
  minPrice,
  maxPrice
) {
  return {
    type: merchandiseTypes.GET_ALL_PRODUCTS,
    payload: {
      products,
      page,
      sort,
      minPrice,
      maxPrice
    }
  };
}

export const getProductsArray =
  (page, sort, minPrice = 49.99, maxPrice = 479.99) =>
  async (dispatch) => {
    try {
      const data = await api
        .get(
          `/products/filter?minPrice=${minPrice}&maxPrice=${maxPrice}&perPage=12&startPage=${page}&sort=${sort}currentPrice`
        )
        .then((products) => products);
      console.log(data.data.products);
      dispatch(
        getAllProducts(
          data.data.products,
          page,
          sort,
          minPrice,
          maxPrice
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
