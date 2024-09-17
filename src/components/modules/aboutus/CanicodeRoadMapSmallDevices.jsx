"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

//Utils
import Rtl from "../../../utils/Rtl";

const steps = [
  {
    label: "ایده اولیه | اسفند 1402",
    description:
      "زمانی که در شهر رُم تحصیل می کردم، یک مساله خیلی واسم عجیب بود و اون این بود که می دیدم همه افراد در سنین مختلف مشغول به کار هستن. اون موقع زیاد وقتی نداشتم تا بتونم روی ایده ای تمرکز کنم. وقتی برگشتم ایران تصمیم گرفتم، بستری رو آماده کنم تا همه افراد با فرصتی برابر بتونن آموزش اصولی ببیند و درآمد داشته باشند.",
  },
  {
    label: "تعریف و بازپروری ایده | فروردین 1403",
    description:
      "خب باید بگم ایده اولیه خیلی خام تر از چیزی بود که الان می بینید؛ البته کلاً ایده ها ذاتاً به این شکل هستن. هرچه رفتم جلوتر و با افراد متخصص در حوزه های مختلف مشورت می کردم، ایده کَن آی کُد پخته تر می شد. تا اینکه در فروردین 1403 به یک ایده جامع و کامل رسیدم.",
  },
  {
    label: "تیم سازی | اردیبهشت 1403",
    description: `قبل از کَن ای کُد برای شرکت های مختلفی فعالیت دورکاری به صورت فریلنسری انجام می دادم. در همون بازه های زمانی که هم آموزش می دیدم و هم کار می کردم، تیم خودم رو جمع کردم تا برای استارت کَن آی
    کُد مشکلی نداشته باشم.`,
  },
  {
    label: "استارت تولید وبسایت | اردیبهشت 1403",
    description: `خب پس از کش و قوس های فراوان و جمع کردن یک تیم استارتاپی، در اردیبهشت 1403، استارت تولید وبسایت Canicode.ir زده شد.`,
  },
  {
    label: "بهره برداری | مهر 1403",
    description: `با توجه به روند پیشرفت کارهای اجرایی، پیش بینی خودمون این هست که تا مهر 1403، این استارتاپ به بهره برداری برسه و بریم سراغ داستان جذاب این آکادمیِ آموزشی و اجرایی.`,
  },
];

export default function CanicodeRoadMapSmallDevices() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Rtl>
      <Box
        sx={{
          m: "40px auto 0 0",
          p: "0 16px",
          "@media(min-width: 850px)": { display: "none" },
        }}
      >
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                optional={
                  index === steps.length - 1 ? (
                    <Typography variant="caption">
                      این هدف بعدی کَن آی کُد می باشد
                    </Typography>
                  ) : null
                }
              >
                <span className="font-bold text-title open:bg-gray500">
                  {step.label}
                </span>
              </StepLabel>
              <StepContent>
                <Typography
                  sx={{
                    fontWeight: "70",
                    fontSize: "13px",
                    color: "#52525b",
                    textAlign: "justify",
                    p: 2,
                    boxShadow: "0px 0px 4px 5px rgba(80, 20, 50, .152)",
                    borderRadius: "10px",
                    m: "10px auto",
                  }}
                >
                  {step.description}
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{
                        mt: 1,
                        mr: 1,
                        fontFamily: "dana",
                        fontWeight: "60",
                        bgcolor: "#3b82f6",
                        color: "whitesmoke",
                      }}
                    >
                      {index === steps.length - 1
                        ? "اتمام نقشه راه"
                        : "بعدش چی شد؟"}
                    </Button>
                    {index !== 0 && (
                      <Button
                        disabled={index === 0}
                        onClick={handleBack}
                        variant="contained"
                        sx={{
                          mt: 1,
                          mr: 1,
                          fontFamily: "dana",
                          fontWeight: "60",
                          color: "whitesmoke",
                          bgcolor: "#f87171",
                        }}
                      >
                        قبلی
                      </Button>
                    )}
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ m: "10px auto 0", p: "0 4px" }}>
            <Typography
              sx={{ fontFamily: "dana", fontWeight: "80", fontSize: "13px" }}
            >
              شما قدم به قدم نقشه راه کَن آی کُد رو مشاهده کردید. ممنون از زمانی
              که گذاشتید 💜
            </Typography>
            <Button
              onClick={handleReset}
              variant="contained"
              sx={{
                mt: 1,
                mr: 1,
                fontFamily: "dana",
                fontWeight: "80",
                color: "#a78bfa",
                bgcolor: "white",
                border: "1px solid #a78bfa",
              }}
            >
              برو به قدم اول
            </Button>
          </Paper>
        )}
      </Box>
    </Rtl>
  );
}
