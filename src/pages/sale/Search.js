// material-ui
import { Box, FormControl, InputAdornment, OutlinedInput } from "@mui/material";

// assets
import { SearchOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  setSaleProducts,
} from "../../store/reducers/saleProducts";
import addSale from "./addSale";

// ==============================|| HEADER CONTENT - SEARCH ||============================== //

const Search = () => {
  const [barcode, setBarcode] = useState("");
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.value);
  const saleProducts = useSelector((state) => state.saleProducts.value);

  const findProduct = (barcode, product) => {
    const filtered = product.filter((p) => {
      return p.productCode === barcode;
    });
    console.log(filtered);
    if (filtered[0]) {
      setBarcode("");
      const checkProduct = saleProducts.some((product) => {
        return product.productCode === filtered[0]?.productCode;
      });
      const findProduct = saleProducts.find((product) => {
        return product.productCode === filtered[0]?.productCode;
      });
      if (checkProduct) {
        dispatch(increaseQuantity(filtered[0]));
        addSale(
          { ...filtered[0], quantity: findProduct.quantity + 1 },
          dispatch
        );
      } else {
        dispatch(setSaleProducts({ ...filtered[0], quantity: 1 }));
        addSale({ ...filtered[0], quantity: 1 }, dispatch);
      }
    }
  };

  useEffect(() => {
    findProduct(barcode, product);
  }, [barcode]);
  return (
    <Box sx={{ width: "100%", ml: { xs: 0, md: 1 } }}>
      <FormControl sx={{ width: { xs: "100%", md: 224 } }}>
        <OutlinedInput
          size="small"
          id="header-search"
          value={barcode}
          onChange={(e) => setBarcode(e.target.value)}
          startAdornment={
            <InputAdornment position="start" sx={{ mr: -0.5 }}>
              <SearchOutlined />
            </InputAdornment>
          }
          aria-describedby="header-search-text"
          inputProps={{
            "aria-label": "weight",
          }}
          placeholder="Search Barcode"
          autoFocus
        />
      </FormControl>
    </Box>
  );
};

export default Search;
