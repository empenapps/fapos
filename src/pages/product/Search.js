import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { useState, useEffect } from 'react';

// material-ui
import { Box, FormControl, InputAdornment, OutlinedInput } from '@mui/material';

// assets
import { SearchOutlined } from '@ant-design/icons';
import { setProduct } from '../../store/actions/product';


// ==============================|| HEADER CONTENT - SEARCH ||============================== //

export default function Search() {

    const [ barcode , setBarcode ] = useState('');
    const dispatch = useDispatch();

    const product = useSelector((state) => state.product);

    const findProduct = (barcode, product) => {
        const filtered = product.data.productList.filter(
                p => {
               return p.productCode === barcode;
                } 
        )
        console.log(filtered);
        dispatch(setProduct(filtered));


    };

    useEffect(() => {
        findProduct(barcode,product);
      }, [barcode]);

return (
    <>
    <Box sx={{ width: '100%', ml: { xs: 0, md: 1 } }}>
        <FormControl sx={{ width: { xs: '100%', md: 224 } }}>

            <OutlinedInput
                name = "barcode"
                value = {barcode}
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
                    'aria-label': 'weight'
                }}
                placeholder="Search Barcode"
                autoFocus
            />
        </FormControl>
    </Box>
    </>
);
}
