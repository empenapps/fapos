import axios from "axios";
import { BASE_URL } from "../../Api";
import { SalesAdd } from "../../store/reducers/saleAdd";

function addSale(product, dispatch) {
  const data = JSON.stringify({
    inProductCode: product.productCode,
    inProductQty: product.quantity,
    inProductPrice: product.productPrice,
    inStoreId: product.storeId,
  });
  const config = {
    method: "put",
    url: `${BASE_URL}/sale/add`,
    headers: {
      "Content-Type": "application/json",
    },
    data,
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
