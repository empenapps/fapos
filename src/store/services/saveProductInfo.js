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
      console.log(response.status);
      getProductList(dispatch, product.inStoreId);
    })
    .catch((error) => {
      console.log(error);
    });
};
