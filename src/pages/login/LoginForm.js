import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox, Select, MenuItem, InputLabel } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from './../../components/iconify';
import { getProductList } from './../../store/services/getProductList';
import { getStoreProduct } from './../../store/actions/product'
// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();




  const [showPassword, setShowPassword] = useState(false);

  const handleClick = async() => {

    console.log(store);
    const data = await getProductList();
    dispatch(getStoreProduct(data));
    navigate('/dashboard', { replace: true });
  };

  const [store, setStore] = useState('')

  return (
    <>
      <Stack spacing={3}>
        <TextField name="user" label="Username" value={store} onChange={(e) => setStore(e.target.value)}/> 
        <TextField name="password" label="Password" value={store} onChange={(e) => setStore(e.target.value)}/> 
        <TextField name="store" label="Store" value={store} onChange={(e) => setStore(e.target.value)}/> 
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        

      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleClick}>
        Enter
      </LoadingButton>
    </>
  );
}
