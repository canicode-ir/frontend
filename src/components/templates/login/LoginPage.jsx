'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';

//Components
import {FieldLevelValidationExample} from '../../modules/userAuthentication/LoginForm';

//Images & Icons
import logo from '../../../../public/logo/transparentLogo.svg'

const style = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  m: '40px auto 0',
};

export default function LoginPage () {
  return (
      <div className='flex flex-col w-full justify-center items-center mt-20 mb-40 mx-auto px-2
        min-[560px]:w-[500px]'>
        <div className='w-[60%] mx-auto'>
          <Image className='w-full' src={logo} width={600} height={600} alt='logo' />
        </div>
        <Box sx={style}>
          <FieldLevelValidationExample />
        </Box>
      </div>
  );
}