'use client';

import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField } from '@mui/material';

//Images & Icons
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

function validatePhone(value) {
  let error;
  if (!value) {
    error = 'لطفاً شماره همراه خود را وارد نمایید';
  } else if (!/^\d{11}$/i.test(value)) {
    error = 'لطفاً مشابه مثال شماره خود را وارد نمایید';
  }
  return error;
}

function validateUsername(value) {
  let error;
  if (!value) {
    error = 'نام و نام خانوادگی خود را وارد نمایید';
  } else if (!/^[\u0600-\u06FF\s]+$/i.test(value)) {
    error = 'لطفاً از حروف فارسی استفاده کنید';
  }
  return error;
}

export const FieldLevelValidationExample = () => {
  const [isRegister, setIsRegister] = useState(true);
  return (
    <div className='flex flex-col w-full justify-center items-center 
      bg-white/30 backdrop-blur-lg rounded-md shadow-formShadow ring-2 ring-indigo100'>
      <h1 className='w-full mt-5 p-1 font-heavey text-center text-[20px] 
        text-transparent bg-gradient-to-l from-indigo950 to-indigo800 bg-clip-text'>ثبت نام در آکادمی کَن آی کُد</h1>
      <div className='flex w-full justify-between items-center mt-8 mx-auto px-4 font-demibold'>
        <button className={`w-full flex text-center ml-1 p-1 rounded-md text-white transition-all duration-500 justify-center items-center
        ${isRegister ? 'bg-gradient-to-l from-indigo700 to-indigo500 outline outline-offset-1 outline-2 outline-violet200 hover:opacity-70' : 
          'bg-gray800/20 hover:ring-1 ring-gray800/30 hover:bg-gray800/10'}`}  
        onClick={() => setIsRegister(true)}>
          <PersonAddIcon sx={{ml: '5px'}}/>
          ثبت نام
        </button>
        <button className={`w-full flex text-center mr-1 p-1 rounded-md text-white transition-all duration-500 justify-center items-center
        ${!isRegister ? 'bg-gradient-to-l from-indigo700 to-indigo500 outline outline-offset-1 outline-2 outline-violet200 hover:opacity-70' : 
          'bg-gray800/20 hover:ring-1 ring-gray800/30 hover:bg-gray800/10'}`} 
        onClick={() => setIsRegister(false)}>
          <LoginIcon sx={{ml: '5px'}}/>
          ورود
        </button>
      </div>
      <Formik
          initialValues={{
          username: '',
          phone: '',
          }}
          onSubmit={values => {
          console.log(values);
          }}
      >
          {({ errors, touched, isValidating }) => (
              <Form className='flex flex-col'>
                <Field name="phone" validate={validatePhone} />
                {errors.phone && touched.phone && <div>{errors.phone}</div>}
                <Field name="username" validate={validateUsername} />
                {errors.username && touched.username && <div>{errors.username}</div>}
    
                <button type="submit">ثبت نام</button>
              </Form>
          )}
      </Formik>
    </div>
  );
}