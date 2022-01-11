import { shopConstants } from "../constants";

const initialState = {
  products: [],
  page: 1,
};

export const shopReducers = (state = initialState, action) => {
  switch (action.type) {
    case shopConstants.SET_SHOP_PRODUCTS:
      action.payload.page = state.page + 1;
      return action.payload;

    case shopConstants.ADD_MORE_PRODUCTS:
      action.payload.products = state.products.concat(action.payload.products);
      action.payload.page = state.page + 1;

      return action.payload;

    default:
      return state;
  }
};
