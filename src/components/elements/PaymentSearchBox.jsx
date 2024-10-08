"use client";

import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

function PaymentSearchBox({ setAllPayments, setVerifiedPayments }) {
  const [selectedFilter, setSelectedFilter] = React.useState("");

  // Step 2: Update handlers to set the selected filter
  const rejectedPaymentsHandler = () => {
    setSelectedFilter("rejected-payments");
    setAllPayments(false);
    setVerifiedPayments(false);
  };

  const allPaymentsHandler = () => {
    setSelectedFilter("all-payments");
    setAllPayments(true);
    setVerifiedPayments(false);
  };

  const verifiedPaymentsHandler = () => {
    setSelectedFilter("verified-payments");
    setAllPayments(false);
    setVerifiedPayments(true);
  };

  const filterBoxItems = [
    { id: "all-payments", label: "همه پرداخت ها", handler: allPaymentsHandler },
    {
      id: "verified-payments",
      label: "پرداخت های موفق",
      handler: verifiedPaymentsHandler,
    },
    {
      id: "rejected-payments",
      label: "پرداخت های ناموفق",
      handler: rejectedPaymentsHandler,
    },
  ];

  return (
    <FormGroup
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        m: "10px 0 0 auto",
        "@media(min-width:520px)": {
          flexDirection: "row",
        },
      }}
    >
      {filterBoxItems.map((item) => (
        <FormControlLabel
          sx={{ width: "fit-content" }}
          key={item.id}
          control={
            <Checkbox
              checked={selectedFilter === item.id}
              onChange={item.handler}
              color="info"
            />
          }
          label={
            <span className="text-[13px] text-indigo200">{item.label}</span>
          }
        />
      ))}
    </FormGroup>
  );
}

export default PaymentSearchBox;
