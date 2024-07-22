'use client';

import React from 'react'
import { useRouter } from 'next/navigation';
import { Container, Typography } from '@mui/material';
import Image from 'next/image';

//Images & Icons
import banner from '../../../../public/homepage/banner.jpg'
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import arrow from '../../../../public/homepage/arrow.svg';

function HomePage() {
  const router = useRouter()

  return (
    <Container sx={{position: 'relative', display: 'flex', flexDirection: 'column' ,m: '40px 0 0', p: 0, justifyContent: 'center', alignItems: 'center',
      '@media (min-width: 872px)' : {
        flexDirection: 'row-reverse',
        p: 0,
      }}}>
      <Image className='flex mx-auto min-[872px]:max-w-[480px]' src={banner} width={800} height={800} alt='banner'/>
      <Container sx={{display: 'flex', flexDirection: 'column', m: '30px auto 0', justifyContent: 'center', p: '0 30px',
        '@media (min-width: 872px)' : {
          m: '30px 0 auto auto',
        }}}>
        <Typography sx={{fontSize: '1.3em', fontWeight: '110', color: '#1f2937', textAlign: 'center',
          '@media (min-width: 872px)' : {
          m: '0 0 auto auto',
          fontWeight: '140'
        }, '@media (min-width: 420px)' : {
          fontWeight: '140'
        }}} variant='h3' component='h2'>برنامه نویسی با 
          <b className='text-transparent bg-gradient-to-l from-indigo800 to-indigo600 mr-1
          bg-clip-text font-extrabold text-2xl min-[872px]:font-fat min-[872px]:mr-2 min-[420px]:font-fat'>آکادمی کَن آی کُد</b>
        </Typography>
        <Typography sx={{textAlign: 'justify', color: '#52525b', fontWeight: '60', fontSize: '17px', m: '25px auto 0', lineHeight: '25px'}} variant='h5' component='p'>
          آموزش آنلاین برنامه نویسی وبسایت، از نقطه صفر تا سطح بازار کار؛ اینجا، ما کنارت هستیم تا اصولی آموزش ببینی و در نهایت بتونی 
          {' '}<b className='font-extrabold text-transparent bg-gradient-to-l from-blue800 to-blue600 mr-1
          bg-clip-text'>ایده خودت</b> رو پیاده سازی کنی یا اینکه 
          {' '}<b className='font-extrabold text-transparent bg-gradient-to-l from-cyan800 to-cyan600 mr-1
          bg-clip-text'>استخدام</b> بشی، 
          البته یک خبر خوب اینکه میتونی توی پروژه ها 
          {' '}<b className='font-extrabold text-transparent bg-gradient-to-l from-amber800 to-amber600 mr-1
          bg-clip-text'>با تیم ما همکاری</b> کنی و درآمد داشته باشی 😉
        </Typography>
        <div className='flex w-fit mt-7 justify-center items-center ml-auto p-0'>
          <button className='w-fit text-center bg-indigo700 p-3 rounded-2xl font-demibold text-white duration-500 hover:opacity-70' onClick={() => router.push("/academy")}>مشاهده دوره ها <OndemandVideoIcon sx={{m: '0 5px 0 0'}}/></button>
          <button className='w-fit text-center mr-3 bg-indigo50 p-3 rounded-2xl font-demibold text-indigo700 duration-500 hover:bg-indigo100'>مشاوره استارت</button>
        </div>
      </Container>
      <Image className='hidden absolute w-40 right-20 -bottom-20 min-[872px]:block' src={arrow} width={600} height={600} alt='arrow'/>
    </Container>
  )
}

export default HomePage;