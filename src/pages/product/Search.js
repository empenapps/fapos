import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { useState, useEffect } from "react";

// material-ui
import { Box, FormControl, InputAdornment, OutlinedInput } from "@mui/material";

// assets
import { SearchOutlined } from "@ant-design/icons";

// ==============================|| HEADER CONTENT - SEARCH ||============================== //

export default function Search({ setData, barcode, setBarcode }) {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.value);

  const findProduct = (barcode, product) => {
    const filtered = product?.filter((p) => {
      return p.productCode === barcode;
    });
    if (filtered[0]) {
      setData({
        inProductNameEn: filtered[0].productNameEn,
        inProductCode: filtered[0].productCode,
        inProductPrice: filtered[0].productPrice,
        inStoreId: filtered[0].storeId,
      });
    }
  };

  useEffect(() => {
    findProduct(barcode, product);
  }, [barcode]);

  return (
    <>
      <Box sx={{ width: "100%", ml: { xs: 0, md: 1 } }}>
        <FormControl sx={{ width: { xs: "100%", md: 224 } }}>
          <OutlinedInput
            name="barcode"
            value={barcode}
            onChange={(e) => setBarcode(e.target.value)}
            size="small"
            id="product-search"
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
    </>
  );
}
