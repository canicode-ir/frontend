"use client";

import React, { useState } from "react";
import { Formik, Form, useField } from "formik";
import { TextField } from "@mui/material";
import axios from "axios";
import { BASE_URL } from "../../../services/api";
import { useRouter } from "next/navigation";

// Images & Icons
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
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

function validateUsername(value) {
  let error;
  if (!value) {
    error = "نام و نام خانوادگی خود را وارد نمایید";
  } else if (/^[\\u0600-\\u06FF\\s]+$/i.test(value)) {
    error = "لطفاً از حروف فارسی استفاده کنید";
  }
  return error;
}

export const FieldLevelValidationExample = () => {
  const [isRegister, setIsRegister] = useState(false);
  const router = useRouter();

  const authToRegister = async (values) => {
    const { username, phone, instagram } = values;
    const data = {
      fullName: username,
      mobile: phone,
      instagram_username: instagram,
    };
    try {
      await axios.post(`${BASE_URL}auth/register`, data);
      values.username = "";
      values.phone = "";
      values.instagram = "";
      notify("ثبت نام شما با موفقیت انجام شد", "success");
      setIsRegister(false);
    } catch (error) {
      console.log(error);
    }
  };

  const authToLogin = async (values) => {
    const data = { mobile: values.phone };
    try {
      const result = await axios.post(`${BASE_URL}auth/login`, data);
      console.log(result);
      router.replace("/userCheckOtp");
    } catch (error) {
      if (error.response.status === 404) {
        notify("!شما هنوز ثبت نام نکرده اید", "error");
        setIsRegister(true);
      } else if (error.response.status === 500) {
        notify("!مشکلی در ارتباط با سرور رخ داده است", "error");
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
        autoFocus={
          !isRegister ? true : field.name === "username" ? true : false
        }
      />
    );
  };

  const inputs = [
    {
      name: "username",
      label: "نام و نام خانوادگی: ",
      placeholder: "مثال: سعید جلیلی",
      validate: validateUsername,
    },
    {
      name: "phone",
      label: "شماره موبایل: ",
      placeholder: "مثال: 09121234567",
      validate: validatePhone,
    },
    {
      name: "instagram",
      label: "اکانت اینستاگرام شما: ",
      placeholder: "مثال: canicode.ir",
    },
  ];

  return (
    <div className="flex flex-col w-full justify-center items-center rounded-2xl shadow-inset py-4">
      <h1
        className="w-full mt-5 p-1 font-heavey text-center text-[20px]
        text-transparent bg-gradient-to-l from-indigo950 to-indigo800 bg-clip-text"
      >
        {isRegister ? "فرم ثبت نام در کَن آی کُد" : "فرم ورود به حساب کاربری"}
      </h1>
      <div className="flex w-full justify-between items-center mt-8 mx-auto px-4 font-demibold">
        <button
          className={`w-full flex text-center ml-1 px-1 py-2 rounded-md text-white transition-all duration-500 justify-center items-center
        ${
          isRegister
            ? "bg-gradient-to-l from-indigo700 to-indigo500 outline outline-offset-1 outline-2 outline-violet200 hover:opacity-70"
            : "bg-gray800/20 hover:ring-1 ring-gray800/30 hover:bg-gray800/10"
        }`}
          onClick={() => setIsRegister(true)}
        >
          <PersonAddIcon sx={{ ml: "5px" }} />
          ثبت نام
        </button>
        <button
          className={`w-full flex text-center mr-1 px-1 py-2 rounded-md text-white transition-all duration-500 justify-center items-center
        ${
          !isRegister
            ? "bg-gradient-to-l from-indigo700 to-indigo500 outline outline-offset-1 outline-2 outline-violet200 hover:opacity-70"
            : "bg-gray800/20 hover:ring-1 ring-gray800/30 hover:bg-gray800/10"
        }`}
          onClick={() => setIsRegister(false)}
        >
          <LoginIcon sx={{ ml: "5px" }} />
          ورود
        </button>
      </div>
      <Formik
        initialValues={{
          username: "",
          phone: "",
        }}
        onSubmit={(values) =>
          !isRegister ? authToLogin(values) : authToRegister(values)
        }
      >
        <Form className="flex flex-col w-full px-4 my-5 justify-center items-center">
          {isRegister
            ? inputs.map((input) => (
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
              ))
            : inputs.map(
                (input) =>
                  input.name === "phone" && (
                    <div
                      key={input.name}
                      className="flex flex-col my-4 w-full justify-center items-center"
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
                  )
              )}
          <button
            type="submit"
            className="mt-5 w-full text-center text-white rounded-md bg-gradient-to-l from-indigo700 
              to-indigo500 outline outline-offset-1 outline-2 outline-violet200 py-2 transition-all duration-300 hover:opacity-80"
          >
            {isRegister ? "ادامه ثبت نام" : "ورود به پنل کاربری"}
            <ArrowCircleLeftIcon sx={{ mr: 1 }} />
          </button>
        </Form>
      </Formik>
    </div>
  );
};