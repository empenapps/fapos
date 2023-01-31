import axios from "axios";
import { BASE_URL } from "./../../Api";
import { getProduct } from "../actions/product";

export const getProductList = async () => {
  let api;
  const url = `${BASE_URL}/pos-api/product/list/1`;
  await axios
    .get(url)
    .then((response) => {
      api = response.data;
    })
    .catch((error) => {
      console.log(error);
    });

  return api;
};
