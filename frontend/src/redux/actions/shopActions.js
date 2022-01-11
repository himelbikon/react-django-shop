import { shopConstants } from "../constants";

export const setShopProducts = (products) => {
  return {
    type: shopConstants.SET_SHOP_PRODUCTS,
    payload: { products: products, page: 1 },
  };
};

export const addShopProducts = (products) => {
  return {
    type: shopConstants.ADD_MORE_PRODUCTS,
    payload: { products: products },
  };
};
