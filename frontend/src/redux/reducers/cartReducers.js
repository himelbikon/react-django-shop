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
          // console.log(exist);
          if (state[i].product.id === exist[0].product.id) {
            state[i].quantity = state[i].quantity + 1;
          }
        }
      } else {
        state.push(action.payload);
      }

      return state;

    default:
      return state;
  }
};
