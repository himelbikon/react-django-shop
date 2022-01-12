import { combineReducers } from "redux";
import { shopReducers } from "./shopReducers";
import { cartReducer } from "./cartReducers";

const reducers = combineReducers({
  shopProducts: shopReducers,
  cart: cartReducer,
});

export default reducers;
