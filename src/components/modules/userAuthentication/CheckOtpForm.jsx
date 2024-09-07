"use client";

import { useState } from "react";
import { Formik, Form, useField } from "formik";
import Image from "next/image";
import { TextField } from "@mui/material";
import axios from "axios";
import { BASE_URL } from "../../../services/api";
import Cookies from "js-cookie";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Components
import CountDownTimer from "../../elements/CountDownTimer";

// Images & Icons
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import PasswordIcon from "@mui/icons-material/Password";
import SettingsCellIcon from "@mui/icons-material/SettingsCell";
import buttonLoading from "../../../../public/general/buttonLoading.gif";

//Functions
import { notify } from "../../../utils/Toast";

// Validation Functions
function validatePhone(value) {
  let error;
  if (!value) {
    error = "لطفاً شماره همراه خود را وارد نمایید";
  } else if ([...value].length > 11) {
    error = "تعداد حداکثر 11 رقم";
  }
  return error;
}

function validateOtp(value) {
  let error;
  if (!value) {
    error = "کد تایید پیامک شده را وارد نمایید";
  }
  return error;
}

export default function CheckOtpForm() {
  const [loading, setLoading] = useState(false);

  const authToCheckOtp = async (values) => {
    const data = { mobile: values.phone, otp_code: values.code };
    setLoading(!loading);
    notify("در حال اعتبارسنجی اطلاعات", "success");
    try {
      const result = await axios.post(`${BASE_URL}auth/check-otp`, data);
      setLoading(false);
      const token = result.data.access_token;
      Cookies.set("token", token, { expires: 7 });
      window.location.href = "/client-dashboard";
    } catch (error) {
      setLoading(false);
      if (error.response.status === 400) {
        notify("!کد ارسالی و یا شماره موبایل را اشتباه وارد کرده اید", "error");
      }
    }
  };

  const CustomTextField = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
      <TextField
        {...field}
        {...props}
        hiddenLabel
        variant="filled"
        error={meta.touched && Boolean(meta.error)}
        helperText={
          meta.touched && <span className="font-demibold">{meta.error}</span>
        }
        fullWidth
        size="small"
        autoFocus={true}
      />
    );
  };

  const inputs = [
    {
      name: "phone",
      badge: <SettingsCellIcon fontSize="small" sx={{ ml: 0.2 }} />,
      label: "شماره موبایل: ",
      placeholder: "مثال: 09121234567",
      validate: validatePhone,
    },
    {
      name: "code",
      badge: <PasswordIcon fontSize="small" sx={{ ml: 0.2 }} />,
      label: "کد تایید را وارد کنید: ",
      placeholder: "مثال: 12345 ",
      validate: validateOtp,
    },
  ];

  return (
    <div className="flex flex-col w-full justify-center items-center rounded-2xl shadow-inset py-4">
      <h1
        className="w-full mt-5 p-1 font-heavey text-center text-[20px]
        text-transparent bg-gradient-to-l from-indigo800 
        to-indigo600 bg-clip-text"
      >
        فرم تایید کد پیامکی ارسال شده
      </h1>
      <Formik
        initialValues={{
          phone: "",
          code: "",
        }}
        onSubmit={(values) => authToCheckOtp(values)}
      >
        <Form className="flex flex-col w-full px-4 my-5 justify-center items-center">
          {inputs.map((input) => (
            <div
              key={input.name}
              className="flex flex-col my-3 w-full justify-center items-center"
            >
              <label className="flex ml-auto mb-2 font-bold text-gray700 items-center justify-center">
                {input.badge}
                {input.label}
              </label>
              <CustomTextField
                name={input.name}
                validate={input.validate}
                placeholder={input.placeholder}
              />
            </div>
          ))}
          <CountDownTimer />
          <button
            type="submit"
            className="mt-5 w-full text-center text-white rounded-md bg-gradient-to-l from-indigo700 
              to-indigo500 outline outline-offset-1 outline-2 outline-violet200 py-2 transition-all duration-300 hover:opacity-80"
          >
            {!loading ? (
              "ارسال اطلاعات"
            ) : (
              <Image
                className="w-6 mx-auto"
                src={buttonLoading}
                width={600}
                height={600}
                alt="buttonLoading"
              />
            )}
            {!loading && <ArrowCircleLeftIcon sx={{ mr: 1 }} />}
          </button>
        </Form>
      </Formik>
      <ToastContainer
        style={{
          width: "fit-content",
          margin: "80px 0 0 auto",
          boxShadow: "none",
        }}
        closeButton={false}
        autoClose={2000}
        bodyStyle={{
          width: "fit-content",
          color: "",
          fontFamily: "dana",
        }}
        progressStyle={{
          backgroundColor: "rgba(26, 103, 103, 0.2)",
        }}
      />
    </div>
  );
}
