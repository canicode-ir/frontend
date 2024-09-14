"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import ToastContainerComponent from "../../elements/ToastContainer";

//Components
import CheckOtpForm from "../../../components/modules/userAuthentication/CheckOtpForm";

//Images & Icons
import logo from "../../../../public/logo/transparentLogo.svg";

const style = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  m: "40px auto 0",
  boxShadow: "0px 0px 300px -55px rgba(30,27,75,.45)",
  borderRadius: "24px",
};

export default function CheckOtp() {
  return (
    <div
      className="flex flex-col w-full justify-center items-center mt-20 mb-40 mx-auto px-2
        min-[560px]:w-[500px]"
    >
      <div className="w-[60%] mx-auto">
        <Image
          className="w-full"
          src={logo}
          width={600}
          height={600}
          alt="logo"
        />
      </div>
      <Box sx={style}>
        <CheckOtpForm />
      </Box>
      <ToastContainerComponent />
    </div>
  );
}
