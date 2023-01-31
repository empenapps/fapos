import { useState } from "react";

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
import OrdersTable from "./OrdersTable";
import IncomeAreaChart from "./IncomeAreaChart";
import MonthlyBarChart from "./MonthlyBarChart";
import ReportAreaChart from "./ReportAreaChart";
import SalesColumnChart from "./SalesColumnChart";
import MainCard from "./../../components/MainCard";
import AnalyticEcommerce from "./../../components/cards/statistics/AnalyticEcommerce";

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
import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../Api";
import { useDispatch, useSelector } from "react-redux";

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

const DashboardDefault = () => {
  const [value, setValue] = useState("today");
  const [slot, setSlot] = useState("week");
  const [kpiData, setKpiData] = useState();
  useEffect(() => {
    const getKpiData = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/pos-api/dashboard/kpi/3`);
        setKpiData(res.data.dashboardList[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getKpiData();
  }, []);

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h5">Dashboard</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce
          title="Total Sales"
          count={kpiData?.totalSales}
          // percentage={59.3}
          // extra="35,000"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce
          title="Total Quantity"
          count={kpiData?.totalQuantity}
          // percentage={70.5}
          // extra="8,900"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce
          title="Average Sales / Transaction"
          count={kpiData?.avgSaleTransaction}
          // percentage={27.4}
          // isLoss
          // color="warning"
          // extra="1,943"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce
          title="Average Quantity / Transaction"
          count={kpiData?.avgQtyTransaction}
          // percentage={27.4}
          // isLoss
          // color="warning"
          // extra="$20,395"
        />
      </Grid>

      <Grid
        item
        md={8}
        sx={{ display: { sm: "none", md: "block", lg: "none" } }}
      />
    </Grid>
  );
};

export default DashboardDefault;
