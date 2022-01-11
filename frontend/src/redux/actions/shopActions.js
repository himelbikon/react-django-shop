import { shopConstants } from "../constants";

export const setShopProducts = (products, page) => {
  return {
    type: shopConstants.SET_SHOP_PRODUCTS,
    payload: { products: products, page: page },
  };
};

export const addShopProducts = (products, page) => {
  return {
    type: shopConstants.ADD_MORE_PRODUCTS,
    payload: { products: products, page: page },
  };
};

// export const resetPage = (page) => {
//   return {
//     type: shopConstants.RESET_PAGE,
//     payload: { page: page },
//   };
// };
