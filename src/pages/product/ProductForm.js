import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import * as Yup from 'yup';
import { Formik , Form, FormEvent,useFormikContext }  from 'formik';

import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

// material-ui
import { 
    Box,
    Button,
    Divider,
    FormControl,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Link, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

// project import
import Dot from '../../components/@extended/Dot';

import AnimateButton from '../../components/@extended/AnimateButton';
import { strengthColor, strengthIndicator } from '../../utils/password-strength';


// ==============================|| ORDER TABLE ||============================== //

export default function ProductForm({data, setData}) {
    const [order] = useState('asc');
    const [orderBy] = useState('trackingNo');
    const [selected] = useState([]);
    const [level, setLevel] = useState();

    const FormObserver= () => {
        const { values } = useFormikContext();
        useEffect(() => {
          setData(values);
        }, [values]);
        return null;
      };


    return (
    <Box m={2} pt={3}>


        <Formik 

                initialValues={{
                    inProductNameEn: '',
                    inProductCode: '',
                    inProductPrice: '',
                    inStoreId:'1'
                }}
                
               >

                {({ errors, resetForm, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (

                    <Form>
                        <FormObserver />
                        <Grid container spacing={3}>

                        <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="productcode">Barcode</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.inProductCode && errors.inProductCode)}
                                        id="inProductCode"
                                        value={values.inProductCode}
                                        name="inProductCode"
                                        onBlur={handleBlur}
                                        onChange= { handleChange}
                                        placeholder="Barcode"
                                        inputProps={{}}
                                    />

                                </Stack>
                            </Grid>

                         <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="inProductNameEn">Product Description</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.inProductNameEn && errors.inProductNameEn)}
                                        id="inProductNameEn"
                                        value={values.inProductNameEn}
                                        name="inProductNameEn"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Description"
                                        inputProps={{}}
                                    />
                                   
                                </Stack>
                            </Grid>
                          
                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="inProductPrice">Price Per Quantity</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.inProductPrice && errors.inProductPrice)}
                                        id="inProductPrice"
                                        value={values.inProductPrice}
                                        name="inProductPrice"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Price"
                                        inputProps={{}}
                                    />
                                    
                                </Stack>
                            </Grid>

                            <Grid item xs={12}>
                            </Grid>

                        </Grid>

                     
     
                    </Form>
                    
                )}
                
            </Formik>
          
       
        </Box>
    );
}
