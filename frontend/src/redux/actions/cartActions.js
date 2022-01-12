import { cartConstants } from "../constants";

export const addToCart = (product) => {
  return {
    type: cartConstants.ADD_TO_CART,
    payload: { product: product, quantity: 1 },
  };
};
