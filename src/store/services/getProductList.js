import axios from "axios";
import { setProduct } from "../reducers/product";
import { setStoreId } from "../reducers/storeId";
import { BASE_URL } from "./../../Api";

export const getProductList = async (dispatch, storeId) => {
  const url = `${BASE_URL}/product/list/${storeId}`;
  await axios
    .get(url)
    .then((response) => {
      dispatch(setProduct(response.data.productList));
      dispatch(setStoreId(response.data.productList[0].storeId));
      console.log("success");
    })
    .catch((error) => {
      console.log(error);
    });
};
