import { cartConstants } from "../constants";

const initialState = [];

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartConstants.ADD_TO_CART:
      const exist = state.filter((item) => {
        return item.product.id === action.payload.product.id;
      });

      if (exist.length) {
        for (let i = 0; i < state.length; i++) {
          if (state[i].product.id == action.payload.product.id) {
            state[i].quantity = state[i].quantity + 1;
          }
        }
      } else {
        state = state.concat(action.payload);
      }

      return state;

    case cartConstants.DELETE_FROM_CART:
      state = state.filter((item) => {
        return item.product.id !== action.payload.id;
      });
      return state;

    default:
      return state;
  }
};
