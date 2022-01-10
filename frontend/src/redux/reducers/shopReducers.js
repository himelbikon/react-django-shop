import { shopConstants } from "../constants";

const initialState = {
  products: [],
  page: 1,
};

export const shopReducers = (state = initialState, action) => {
  switch (action.type) {
    case shopConstants.SET_SHOP_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
};
