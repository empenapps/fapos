import { Box } from "@mui/material";
import React from "react";
import { forwardRef } from "react";
import { useSelector } from "react-redux";
// import qr from ""
const mainContainer = {
  width: "90%",
  margin: "auto",
  marginTop: "10%",
  display: "none",
  textAlign: "center",
  "@media print": {
    display: "block",
  },
};

const line = {
  border: "1.2px solid black",
};

const BillInvoice = forwardRef((props, ref) => {
  const sales = useSelector((state) => state.saveSale.value);
  return (
    <Box ref={ref} sx={mainContainer} className="mainContainer">
      <div>
        <b>{sales?.billSummaryList?.storeNameEn}</b>
        <div style={{ margin: "auto" }}>
          {sales?.billSummaryList?.addressLine1Ar}
        </div>
        <div>{sales?.billSummaryList?.addressLine2Ar}</div>
        <div>Phone Number : {sales?.billSummaryList?.phoneNumber1}</div>
        <div>Tax Number : {sales?.billSummaryList?.taxNumber1}</div>
      </div>
      <div>
        <hr style={line} />
        <b>Simple Tax Invoice</b>
        <hr style={line} />
        <div style={{ textAlign: "start" }}>
          <div>
            <span>Store Id : </span>
            <span>{sales?.billSummaryList?.storeId}</span>
          </div>
          <div>
            <span>Bill Number : </span>
            <span>{sales?.billSummaryList?.billNumber}</span>
          </div>
          <div>
            <span>Bill Id : </span>
            <span>{sales?.billSummaryList?.billId}</span>
          </div>
          <div>
            <span>Invoice Issue Date : </span>
            <span>{sales?.billSummaryList?.billDate}</span>
          </div>
        </div>
      </div>
      <div>
        <hr style={line} />
        <table style={{ borderCollapse: "collapse", width: "100%" }}>
          <tr
            style={{
              borderWidth: "2px 0px",
              borderStyle: "solid",
            }}
          >
            <th>Bill Id</th>
            <th>Item Id</th>
            <th>product Name</th>
            <th>price</th>
            <th>quantity</th>
            <th>vat</th>
            <th>total</th>
          </tr>
          {sales?.billInfoList?.map((item) => (
            <tr>
              <td>{item.billId}</td>
              <td>{item.itemId}</td>
              <td>{item.productNameEn}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.vat}</td>
              <td>{item.total}</td>
            </tr>
          ))}
          <tr
            style={{
              borderWidth: "2px 0px",
              borderStyle: "solid",
            }}
          >
            <td colSpan={4}>Total VAT</td>
            <td>SAR {Number(sales?.billSummaryList?.totalVat).toFixed(2)}</td>
          </tr>
          <tr
            style={{
              borderWidth: "2px 0px",
              borderStyle: "solid",
            }}
          >
            <td colSpan={4}>Total Due</td>
            <td>SAR {sales?.billSummaryList?.totalDue}</td>
          </tr>
        </table>
      </div>
      <hr style={line} />
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div>
          <div>Total Items : {sales?.billSummaryList?.totalItems}</div>
          {/* <div>Cash : SAR 18.00</div>
          <div>Paid Amount : SAR 18.00</div> */}
        </div>
      </div>
      <hr style={line} />
      <div className="QRCode">
        <img
          style={{ width: "110px", height: "125px" }}
          src="/assets/images/bill/qrcode.png"
        />
        <div>Technology Partner https://posbytz.com</div>
      </div>
    </Box>
  );
});

export default BillInvoice;
