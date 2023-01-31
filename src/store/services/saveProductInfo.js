import { SettingsBackupRestoreRounded } from "@material-ui/icons";
import axios from "axios";
import { BASE_URL } from "../../Api";
import { emptySearchedProduct } from "../reducers/searchedProduct";

export const saveProductInfo = (data, navigate) => {
  const product = JSON.stringify({
    inProductNameEn: data[0].productNameEn,
    inProductCode: data[0].productCode,
    inProductPrice: data[0].productPrice,
    inStoreId: data[0].storeId,
  });

  axios
    .put(`${BASE_URL}/pos-api/product/save`, product, {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => {
      console.log(response.status);
      navigate("/dashboard");
    })
    .catch((error) => {
      console.log(error);
    });
};
