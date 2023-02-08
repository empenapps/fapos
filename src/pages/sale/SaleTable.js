import PropTypes from "prop-types";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
// material-ui
import {
  Box,
  Link,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

// project import
import Dot from "../../components/@extended/Dot";
import { useDispatch, useSelector } from "react-redux";
import addSale from "./addSale";
import {
  decreaseQuantity,
  increaseQuantity,
} from "../../store/reducers/saleProducts";

function createData(trackingNo, name, fat, carbs, protein) {
  return { trackingNo, name, fat, carbs, protein };
}

// const rows = [
//   createData(84564564, "Camera Lens", 40, 2, 40570),
//   createData(98764564, "Laptop", 300, 0, 180139),
//   createData(98756325, "Mobile", 355, 1, 90989),
//   createData(98652366, "Handset", 50, 1, 10239),
//   createData(13286564, "Comput Accessories", 100, 1, 83348),
//   createData(86739658, "TV", 99, 0, 410780),
//   createData(13256498, "Keyboard", 125, 2, 70999),
//   createData(98753263, "Mouse", 89, 2, 10570),
//   createData(98753275, "Desktop", 185, 1, 98063),
//   createData(98753291, "Chair", 100, 0, 14001),
// ];

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
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

// ==============================|| ORDER TABLE - HEADER CELL ||============================== //

const headCells = [
  {
    id: "serial",
    align: "center",
    disablePadding: true,
    label: "#",
  },
  {
    id: "ProductCode",
    align: "center",
    disablePadding: true,
    label: "Product Code",
  },
  {
    id: "productNameEn",
    align: "center",
    disablePadding: false,
    label: "Product Name",
  },
  {
    id: "quantity",
    align: "left",
    disablePadding: false,
    label: "Quantity",
  },
  {
    id: "productPrice",
    align: "center",
    disablePadding: false,
    label: "Price",
  },
  {
    id: "VAT",
    align: "center",
    disablePadding: false,
    label: "VAT",
  },
  {
    id: "Total",
    align: "center",
    disablePadding: false,
    label: "Total",
  },
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

export default function Sale() {
  const [order] = useState("asc");
  const [orderBy] = useState("");
  const [selected] = useState([]);
  const dispatch = useDispatch();
  const saleProducts = useSelector((state) => state.saleProducts.value);
  const isSelected = (trackingNo) => selected.indexOf(trackingNo) !== -1;

  const total = () => {
    return saleProducts
      .map(({ productPrice, quantity }) => Number(productPrice * quantity))
      .reduce((sum, i) => sum + i, 0);
  };

  const changeQuantity = (type, product) => {
    if (type === "increase") {
      dispatch(increaseQuantity(product));
      addSale({ ...product, quantity: product.quantity + 1 }, dispatch);
    } else {
      dispatch(decreaseQuantity(product));
      addSale({ ...product, quantity: product.quantity - 1 }, dispatch);
    }
  };
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
            {stableSort(saleProducts, getComparator(order, orderBy)).map(
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
                    key={row.productCode}
                    selected={isItemSelected}
                  >
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      align="center"
                    >
                      {index + 1}
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      align="center"
                    >
                      {row.productCode}
                    </TableCell>
                    <TableCell align="center">{row.productNameEn}</TableCell>
                    <TableCell align="left">
                      <div
                        style={{
                          width: "80px",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        {
                          <AddIcon
                            color="primary"
                            style={{ cursor: "pointer" }}
                            onClick={() => changeQuantity("increase", row)}
                          />
                        }
                        {row.quantity}
                        {
                          <RemoveIcon
                            color="error"
                            style={{ cursor: "pointer" }}
                            onClick={() => changeQuantity("decrease", row)}
                          />
                        }
                      </div>
                    </TableCell>
                    <TableCell align="center">
                      {((row.productPrice / 1.15) * row.quantity).toFixed(2)}
                    </TableCell>
                    <TableCell align="center">
                      {(
                        ((row.productPrice * 0.15) / 1.15) *
                        row.quantity
                      ).toFixed(2)}
                    </TableCell>
                    <TableCell align="center">
                      {row.productPrice * row.quantity}
                    </TableCell>
                  </TableRow>
                );
              }
            )}
          </TableBody>
          <TableFooter>
            <TableCell
              colSpan={2}
              align="right"
              style={{ fontWeight: "bolder" }}
            >
              Total :
            </TableCell>
            <TableCell
              colSpan={2}
              align="left"
              style={{ fontWeight: "bolder" }}
            >
              {total()}
            </TableCell>
          </TableFooter>
        </Table>
      </TableContainer>
    </Box>
  );
}
