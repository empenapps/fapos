import react from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// material-ui
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Grid,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemSecondaryAction,
  ListItemText,
  MenuItem,
  Stack,
  Link,
  TextField,
  Typography,
} from "@mui/material";

// project import
// assets
import {
  GiftOutlined,
  MessageOutlined,
  PropertySafetyFilled,
  SettingOutlined,
  WindowsFilled,
} from "@ant-design/icons";
import avatar1 from "./../../assets/images/users/avatar-1.png";
import avatar2 from "./../../assets/images/users/avatar-2.png";
import avatar3 from "./../../assets/images/users/avatar-3.png";
import avatar4 from "./../../assets/images/users/avatar-4.png";

import OrdersTable from "./../dashboard/OrdersTable";
import IncomeAreaChart from "./../dashboard/IncomeAreaChart";
import MonthlyBarChart from "./../dashboard/MonthlyBarChart";
import ReportAreaChart from "./../dashboard/ReportAreaChart";
import SalesColumnChart from "./../dashboard/SalesColumnChart";
import MainCard from "./../../components/MainCard";
import AnalyticEcommerce from "./../../components/cards/statistics/AnalyticEcommerce";

import ProductForm from "./ProductForm";
import Search from "./../product/Search";

import { saveProductInfo } from "./../../store/services/saveProductInfo";

// avatar style
const avatarSX = {
  width: 36,
  height: 36,
  fontSize: "1rem",
};

// action style
const actionSX = {
  mt: 0.75,
  ml: 1,
  top: "auto",
  right: "auto",
  alignSelf: "flex-start",
  transform: "none",
};

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const Product = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialState = {
    inProductNameEn: "",
    inProductCode: "",
    inProductPrice: "",
    inStoreId: "",
  };

  const [data, setData] = useState(initialState);
  const searchedProduct = useSelector((state) => state.searchedProduct.value);
  const handleClick = () => {
    saveProductInfo(searchedProduct, navigate);
  };

  return (
    <>
      <Grid container rowSpacing={4.5} columnSpacing={2.75}>
        {/* row 1 */}

        <Grid item xs={12} sx={{ mb: -2.25 }}>
          <Typography variant="h5">Product</Typography>
          <br />
          <Search />
        </Grid>
        <Grid item xs={12} md={7} lg={8}>
          <MainCard sx={{ mt: 2 }} content={false}>
            <ProductForm data={data} setData={setData} />
          </MainCard>
        </Grid>

        <Grid item xs={12} md={5} lg={4}>
          <MainCard sx={{ mt: 2 }} content={false}>
            <Box sx={{ p: 2, pb: 2 }}>
              <Stack spacing={2}>
                <Button onClick={handleClick}> SAVE </Button>
              </Stack>
            </Box>
          </MainCard>
        </Grid>
      </Grid>
    </>
  );
};

export default Product;
