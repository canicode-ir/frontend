import React from 'react'
import { Container, Typography } from '@mui/material';
import Image from 'next/image';

//Images & Icons
import banner from '../../../../public/homepage/banner.jpg'

function HomePage() {
  return (
    <Container sx={{display: 'flex', flexDirection: 'column' ,m: '40px 0 0', p: 0, justifyContent: 'center', alignItems: 'center',
      '@media (min-width: 844px)' : {
        flexDirection: 'row-reverse',
        p: 0,
      }}}>
      <Image className='flex mx-auto min-[844px]:max-w-[480px]' src={banner} width={800} height={800} alt='banner'/>
      <Container sx={{display: 'flex', flexDirection: 'column', m: '30px auto 0', justifyContent: 'center',
        '@media (min-width: 844px)' : {
          m: '30px 0 auto auto'
        }}}>
        <Typography sx={{fontSize: '1.3em', fontWeight: '110', color: '#1f2937', textAlign: 'center',
          '@media (min-width: 844px)' : {
          m: '0 0 auto auto',
          fontWeight: '140'
        }}} variant='h3' component='h2'>برنامه نویسی با 
          <b className='text-transparent bg-gradient-to-l from-indigo800 to-indigo600 mr-1
          bg-clip-text font-extrabold text-2xl min-[844px]:font-fat min-[844px]:mr-2'>آکادمی کَن آی کُد</b>
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
      </Container>
    </Container>
  )
}

export default HomePage;