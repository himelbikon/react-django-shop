import { combineReducers } from "redux";
import { shopReducers } from "./shopReducers";

const reducers = combineReducers({
  shopProducts: shopReducers,
});

export default reducers;
