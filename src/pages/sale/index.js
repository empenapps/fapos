// const xmltext require() "./bill.xml";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactToPrint, { useReactToPrint } from "react-to-print";
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
  TextField,
  Typography,
} from "@mui/material";

// project import

// assets
import {
  GiftOutlined,
  MessageOutlined,
  SettingOutlined,
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
import SaleTable from "./SaleTable";
import AddSaleTable from "./AddSaleTable";
import Search from "./Search";
import { BASE_URL } from "../../Api";
import axios from "axios";
import { emptySale } from "../../store/reducers/saleProducts";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import BillInvoice from "./BillInvoice";
import { saveSaleData } from "../../store/reducers/saveSale";
import { emptySalesAdd } from "../../store/reducers/saleAdd";

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

// sales report status
const status = [
  {
    value: "today",
    label: "Today",
  },
  {
    value: "month",
    label: "This Month",
  },
  {
    value: "year",
    label: "This Year",
  },
];

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const Sale = () => {
  const [value, setValue] = useState("today");
  const [slot, setSlot] = useState("week");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let componentRef = useRef();
  const saleProducts = useSelector((state) => state.saleProducts.value);
  const saveSale = () => {
    const data = saleProducts.map((product) => {
      return {
        inProductCode: product.productCode,
        inProductQty: product.quantity,
        inProductPrice: product.productPrice,
        inStoreId: product.storeId,
      };
    });
    const config = {
      method: "put",
      url: `${BASE_URL}/pos-api/sale/save`,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({ itemList: data }),
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        dispatch(saveSaleData(response.data));
        dispatch(emptySale());
        navigate("/dashboard");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const clearSale = () => {
    var data = JSON.stringify({
      inStoreId: "1",
    });

    var config = {
      method: "put",
      url: `${BASE_URL}/pos-api/clear/cart`,
      headers: {
        "Content-Type": "application/json",
      },
      data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        dispatch(emptySale());
        dispatch(emptySalesAdd());
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h5">Sale</Typography>
        <br />
        <Search />
      </Grid>
      <Grid item xs={12} md={7} lg={8}>
        <MainCard sx={{ mt: 2 }} content={false}>
          <SaleTable />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
        <MainCard sx={{ mt: 2 }} content={false}>
          <Box sx={{ p: 2, pb: 2 }}>
            <Stack spacing={2}>
              <Button onClick={() => saveSale()}> SAVE ONLY </Button>
              <Button onClick={() => clearSale()}> CLEAR </Button>
              <Button
                onClick={() => {
                  saveSale();
                  handlePrint();
                }}
              >
                {" "}
                SAVE & PRINT{" "}
              </Button>
            </Stack>
          </Box>
          <AddSaleTable />
        </MainCard>
        <BillInvoice ref={componentRef} />
        <ReactToPrint
        // trigger={() => {
        // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
        // to the root node of the returned component as it will be overwritten.
        // return <a href="#">Print this out!</a>;
        // }}
        // content={() => componentRef.current}
        />
      </Grid>
    </Grid>
  );
};

export default Sale;
