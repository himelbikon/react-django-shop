import { shopConstants } from "../constants";

export const setShopProducts = (products) => {
  return {
    type: shopConstants.SET_SHOP_PRODUCTS,
    payload: { products: products, page: 1 },
  };
};
