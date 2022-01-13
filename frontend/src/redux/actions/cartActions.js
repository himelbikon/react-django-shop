import { cartConstants } from "../constants";

export const addToCart = (product) => {
  return {
    type: cartConstants.ADD_TO_CART,
    payload: { product: product, quantity: 1 },
  };
};

export const deleteFromCart = (id) => {
  return {
    type: cartConstants.DELETE_FROM_CART,
    payload: { id: id },
  };
};
