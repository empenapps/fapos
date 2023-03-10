// third-party
import { combineReducers } from "redux";

// project import
import user from "./user";
import menu from "./menu";
import product from "./product";
import storeId from "./storeId";
import saleProducts from "./saleProducts";
import AddSaleData from "./saleAdd";
import saveSale from "./saveSale";
// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({
  user,
  menu,
  product,
  storeId,
  saleProducts,
  AddSaleData,
  saveSale,
});

export default reducers;
