"use client";

import React from "react";
import { Formik, Form, useField } from "formik";
import { TextField } from "@mui/material";
import axios from "axios";
import { BASE_URL } from "../../../services/api";
import { useRouter } from "next/navigation";

// Images & Icons
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

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
  const router = useRouter();

  const authToCheckOtp = async (values) => {
    const data = { mobile: values.phone, otp_code: values.code };
    try {
      await axios.post(`${BASE_URL}auth/check-otp`, data);
      router.replace("/client-dashboard");
      console.log(data);
    } catch (error) {
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
      label: "شماره موبایل: ",
      placeholder: "مثال: 09121234567",
      validate: validatePhone,
    },
    {
      name: "code",
      label: "کد تایید را وارد کنید: ",
      placeholder: "مثال: 12345 ",
      validate: validateOtp,
    },
  ];

  return (
    <div className="flex flex-col w-full justify-center items-center rounded-2xl shadow-inset py-4">
      <h1
        className="w-full mt-5 p-1 font-heavey text-center text-[20px]
        text-transparent bg-gradient-to-l from-indigo950 to-indigo800 bg-clip-text"
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
              <label className="ml-auto mb-2 font-extrabold text-title">
                {input.label}
              </label>
              <CustomTextField
                name={input.name}
                validate={input.validate}
                placeholder={input.placeholder}
              />
            </div>
          ))}
          <button
            type="submit"
            className="mt-5 w-full text-center text-white rounded-md bg-gradient-to-l from-indigo700 
              to-indigo500 outline outline-offset-1 outline-2 outline-violet200 py-2 transition-all duration-300 hover:opacity-80"
          >
            ارسال اطلاعات
            <ArrowCircleLeftIcon sx={{ mr: 1 }} />
          </button>
        </Form>
      </Formik>
    </div>
  );
}
