import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// @mui
import {
  Link,
  Stack,
  IconButton,
  InputAdornment,
  TextField,
  Checkbox,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
// components
import Iconify from "./../../components/iconify";
import { getProductList } from "./../../store/services/getProductList";
import { getStoreProduct } from "./../../store/actions/product";
import axios from "axios";
import { BASE_URL } from "../../Api";
import {
  increment,
  incrementByAmount,
  setProduct,
} from "../../store/reducers/product";
import { setUserData } from "../../store/reducers/user";
// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const storeId = useSelector((state) => state.storeId.value);
  const handleClick = async () => {
    try {
      const response = await axios.post(
        `${BASE_URL}/user/login`,
        {
          inUserName: store.user,
          inUserPassword: store.password,
          inStoreCode: store.store,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      dispatch(setUserData(response.data));
      await getProductList(dispatch, storeId);
      navigate("/dashboard", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  const [store, setStore] = useState({
    user: "",
    password: "",
    store: "",
  });

  const handleChange = (e) => {
    setStore({ ...store, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Stack spacing={3}>
        <TextField
          name="user"
          label="Username"
          value={store.user}
          onChange={(e) => handleChange(e)}
        />
        <TextField
          name="password"
          label="Password"
          value={store.password}
          onChange={(e) => handleChange(e)}
        />
        <TextField
          name="store"
          label="Store"
          value={store.store}
          onChange={(e) => handleChange(e)}
        />
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ my: 2 }}
      ></Stack>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        onClick={handleClick}
      >
        Enter
      </LoadingButton>
    </>
  );
}
