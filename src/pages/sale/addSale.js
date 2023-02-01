import axios from "axios";
import { BASE_URL } from "../../Api";
import { SalesAdd } from "../../store/reducers/saleAdd";

function addSale(product, dispatch) {
  const data = JSON.stringify({
    inProductCode: product.productCode,
    inProductQty: 1,
    inProductPrice: product.productPrice,
    inStoreId: product.storeId,
  });

  const config = {
    method: "put",
    url: `${BASE_URL}/pos-api/sale/add`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      dispatch(SalesAdd(response.data));
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default addSale;
