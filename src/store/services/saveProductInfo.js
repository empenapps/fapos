import axios from "axios";
import { BASE_URL } from "../../Api";
import product from "../reducers/product";
import { getProductList } from "./getProductList";

export const saveProductInfo = (data, dispatch) => {
  axios
    .put(`${BASE_URL}/product/save`, JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => {
      getProductList(dispatch, product.inStoreId);
      console.log('Product Saved Successfully');
    })
    .catch((error) => {
      console.log(error);
    });
};
