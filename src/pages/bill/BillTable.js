import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";
// material-ui
import {
  Box,
  Checkbox,
  Link,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

// project import
import Dot from "../../components/@extended/Dot";
import { BASE_URL } from "../../Api";

function createData(trackingNo, name, fat, carbs, protein) {
  return { trackingNo, name, fat, carbs, protein };
}

// "billId": "1",
// "billDate": "2023-01-09 15:09:00.14",
// "billAmount": "11",
// "storeId": "1"

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array?.map((el, index) => [el, index]);
  stabilizedThis?.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis?.map((el) => el[0]);
}

// ==============================|| ORDER TABLE - HEADER CELL ||============================== //

const headCells = [
  {
    id: "sel",
    align: "left",
    disablePadding: false,
    label: "",
  },
  {
    id: "",
    align: "left",
    disablePadding: false,
    label: "Bill ID",
  },
  {
    id: "billDate",
    align: "left",
    disablePadding: true,
    label: "Bill Date",
  },
  {
    id: "amount",
    align: "center",
    disablePadding: false,
    label: "Price",
  },
  {
    id: "storeId",
    align: "center",
    disablePadding: false,
    label: "Store ID",
  },
  //   {
  //     id: "protein",
  //     align: "center",
  //     disablePadding: false,
  //     label: "VAT",
  //   },
  //   {
  //     id: "vitamins",
  //     align: "center",
  //     disablePadding: false,
  //     label: "Total",
  //   },
];

// ==============================|| ORDER TABLE - HEADER ||============================== //

function OrderTableHead({ order, orderBy }) {
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

OrderTableHead.propTypes = {
  order: PropTypes.string,
  orderBy: PropTypes.string,
};

// ==============================|| ORDER TABLE - STATUS ||============================== //

const OrderStatus = ({ status }) => {
  let color;
  let title;

  switch (status) {
    case 0:
      color = "warning";
      title = "Pending";
      break;
    case 1:
      color = "success";
      title = "Approved";
      break;
    case 2:
      color = "error";
      title = "Rejected";
      break;
    default:
      color = "primary";
      title = "None";
  }

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Dot color={color} />
      <Typography>{title}</Typography>
    </Stack>
  );
};

OrderStatus.propTypes = {
  status: PropTypes.number,
};

// ==============================|| ORDER TABLE ||============================== //

export default function BillTable() {
  const [order] = useState("asc");
  const [orderBy] = useState("billid");
  const [selected] = useState([]);
  const [rows, setRows] = useState();
  const isSelected = (trackingNo) => selected.indexOf(trackingNo) !== -1;
  useEffect(() => {
    axios
      .get(`${BASE_URL}/pos-api/bill/list/6`)
      .then(function (response) {
        console.log(response.data.billList);
        setRows(response.data.billList);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <Box>
      <TableContainer
        sx={{
          width: "100%",
          overflowX: "auto",
          position: "relative",
          display: "block",
          maxWidth: "100%",
          "& td, & th": { whiteSpace: "nowrap" },
        }}
      >
        <Table
          aria-labelledby="tableTitle"
          sx={{
            "& .MuiTableCell-root:first-child": {
              pl: 2,
            },
            "& .MuiTableCell-root:last-child": {
              pr: 3,
            },
          }}
        >
          <OrderTableHead order={order} orderBy={orderBy} />
          <TableBody>
            {stableSort(rows, getComparator(order, orderBy))?.map(
              (row, index) => {
                const isItemSelected = isSelected(row.trackingNo);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    role="checkbox"
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row?.billId}
                    selected={isItemSelected}
                  >
                    <Checkbox>Select</Checkbox>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      align="left"
                    >
                      <Link color="secondary" component={RouterLink} to="">
                        {row?.billId}
                      </Link>
                    </TableCell>

                    <TableCell align="left">{row?.billDate}</TableCell>
                    <TableCell align="center">{row?.billAmount} </TableCell>
                    <TableCell align="center">{row?.storeId}</TableCell>
                  </TableRow>
                );
              }
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
