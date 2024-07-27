'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const steps = [
  {
    level: 'starter',
    label: 'قدم اول: سطح جونیور (پایه)',
    description: 'در این سطح، ما از HTML و CSS آموزش رو شروع می کنیم که پایه و اساس کار ماست. باید بدونید که HTML و CSS زبان برنامه نویسی نیستند، اما بعد از اون میریم سراغ آموزش زبان برنامه نویسی جاوااسکریپت؛ باید بگم از اینجاست که همه چیز شروع میشه، پس این رو فراموش نکنید که برای موفقیت در این حرفه درک عمیقی از JS نیاز هستش.',
  },
  {
    level: 'mid-level',
    label: 'قدم دوم: سطح میدلول (پیشگام)',
    description:
      'در این سطح، می ریم سراغ یکی از کتابخونه های جاوااسکریپت به نام ReactJs، که البته جزو به روز ترین و قدرتمند ترین لایبرری های فرانت هستش. همچنین در این سطح باید گیت و گیت هاب رو هم برای مدیریت کردن سورس کد های پروژه هاتون یاد بگیرید؛ بدون یادگیری گیت و گیت هاب باید بگم در هیچ پروژه ای نمی تونید فعالیت کنید.',
  },
  {
    level: 'advanced-level',
    label: 'قدم اول: سطح سنیور (متخصص فرانت)',
    description: 'در نهایت هم می ریم سراغ آموزش یک ابر قهرمان در حوزه فرانت به نام NextJs. نکست یک فریم وورک از ریکت هستش که یکسری از ضعف های ریکت رو پوشش میده؛ مثل SEO کردن سایت. همچنین در این سطح، فریم وورک استایل دهی پیشرفته Tailwind و همچنین استفاده از Material UI رو که کامپوننت های آماده داره آموزش می بینیم.',
  },
];

export default function TextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', m: '24px auto 0', 
        boxShadow: '5px 5px 8px #dfdfdf, -5px -5px 8px #fbfbfb', borderRadius: '8px',
        '@media (min-width: 800px)' : {maxWidth: 400, m: '24px 0 0 auto'},
        '@media (min-width: 1024px)' : {maxWidth: 500, m: '24px 0 0 auto'}}}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pr: 1,
          color: 'white',
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px',
          bgcolor: `${steps[activeStep].level === 'starter' ? '#eab308' 
            : steps[activeStep].level === 'mid-level' ? '#0284c7' : '#1f2937'}`,
        }}
      >
        <Typography sx={{fontWeight: '90'}}>{steps[activeStep].label}</Typography>
      </Paper>
      <Box sx={{ width: '100%', p: '16px 8px', textAlign: 'justify', fontSize: '13px', fontWeight: '60', color: '#52525b',
        borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px',
        bgcolor: `${steps[activeStep].level === 'starter' ? '#fefce8' 
        : steps[activeStep].level === 'mid-level' ? '#f0f9ff' : '#f9fafb'}`}}>
        {steps[activeStep].description}
      </Box>
      <MobileStepper
        dir='ltr'
        variant="progress"
        steps={3}
        position="static"
        activeStep={activeStep}
        sx={{flexGrow: 1, p: 0, m: '20px 0 10px', borderRadius: '8px', 
            '& .MuiMobileStepper-progress': {width: '25%', bgcolor: '#ddd6fe', borderRadius: '8px', 
            '@media (min-width: 364px)': {width: '40%'},
            '@media (min-width: 572px)': {width: '60%'},
            '@media (min-width: 800px)': {width: '50%'}}}}
        nextButton={
            <Button sx={{fontFamily: 'dana', fontWeight: '110', color: '#3730a3'}} size="small" onClick={handleNext} disabled={activeStep === 2}>
            سطح بعدی
            {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
            ) : (
                <KeyboardArrowRight />
            )}
            </Button>
        }
        backButton={
            <Button sx={{fontFamily: 'dana', fontWeight: '110', color: '#3730a3'}} size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
            ) : (
                <KeyboardArrowLeft />
            )}
            سطح قبلی
            </Button>
        }
    />
    </Box>
  );
}