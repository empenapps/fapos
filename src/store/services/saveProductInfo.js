import axios from "axios";
import { BASE_URL } from "../../Api";

export const saveProductInfo = (data) => {
  axios
    .put(`${BASE_URL}/pos-api/product/save`, JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => {
      console.log(response.status);
    })
    .catch((error) => {
      console.log(error);
    });
};
