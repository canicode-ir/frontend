"use client";

import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import ViewStreamIcon from "@mui/icons-material/ViewStream";
import Image from "next/image";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const imageUrl = "https://canicode-app.storage.iran.liara.space/";

const images = [
  {
    devMode: "js",
    label: "Brainhub - توسعه با جاوااسکریپت خام",
    imgPath: `${imageUrl}667ddd244c2ea7096f99b7b963439859e6aae7577c7e5cdd7086ea5c08d5bfba.brainhub.png`,
  },
  {
    devMode: "js",
    label: "Neoteric - توسعه با جاوااسکریپت خام",
    imgPath: `${imageUrl}81e545f3b9390c071ac2c2061f9afbe436041cc0b6fa0090538d7662b76355d4.neoteric.png`,
  },
  {
    devMode: "js",
    label: "Monterail - توسعه با جاوااسکریپت خام",
    imgPath: `${imageUrl}23709422c3d129ec55dee3506ceb492c96eae0c33a5495db72cbd71e3f6edc5e.monterail.png`,
  },
  {
    devMode: "reactjs",
    label: "NewYork Times - توسعه با ریکت ",
    imgPath: `${imageUrl}bab7db1914127cd21aed3c26a760a139d6fd45aafdd07e2795455d869a7a9c2f.nytimes-react.png`,
  },
  {
    devMode: "reactjs",
    label: "Netflix - توسعه با ریکت",
    imgPath: `${imageUrl}36e0376dedd05ba0d937df7475d850ce61aa8156ea378f71660e29c5399a359f.netflix-react.png`,
  },
  {
    devMode: "reactjs",
    label: "Tesla - توسعه با ریکت",
    imgPath: `${imageUrl}0e414fbf9cbb4a466612a0fa1c76983289f969f403e75f081bdc6f9b9d1210de.tesla-react.png`,
  },
  {
    devMode: "nextjs",
    label: "Hulu - توسعه با نکست",
    imgPath: `${imageUrl}33302e86e3f462c345ce060c103e97f3292f6213d6b0d20efb5bfbb48830a5b4.hulu-next.png`,
  },
  {
    devMode: "nextjs",
    label: "Airbnb - توسعه با نکست",
    imgPath: `${imageUrl}ead22ac9e4c0250c3c4f3d96ddc02de8d54cbf6875f8f16bc6037b5167c40f80.airbnb-next.png`,
  },
  {
    devMode: "nextjs",
    label: "Tiktok - توسعه با نکست",
    imgPath: `${imageUrl}ecff3293b9e1b81e4216d071f5a8f1d04ff8ac75d2b19a7a4539a06ce2b4f2e6.tiktok-next.png`,
  },
];

function SwipeableTextMobileStepper({ courses }) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div
      className="flex flex-col justify-center items-center mt-20 px-6
        min-[872px]:mt-10 min-[872px]:flex-row lg:p-0"
    >
      <div className="flex flex-col justify-between items-center mx-auto">
        <div className="flex w-fit ml-auto justify-center items-center">
          <ViewStreamIcon
            sx={{ color: "#1f2937", fontSize: "20px", m: "0 0 0 7px" }}
          />
          <h5 className="font-heavey text-title text-md md:text-lg">
            کدام کسب و کار؟ | کدام بَستر؟
          </h5>
        </div>
        <p className="text-justify p-2 text-detail text-md md:text-lg">
          در این بخش؛ ما اسم چند کسب و کار موفق دنیا رو آوردیم و همچنین در کادر
          بالای هر عکس؛ تکنولوژی اصلی به کار برده شده در اون کسب و کار رو نام
          بردیم.
        </p>
        <section className="flex flex-row-reverse w-fit items-center justify-between mt-5 mx-auto px-2 mx-auto min-[600px]:w-full">
          {courses.map(
            (course) =>
              course.name !== "bootcamp" && (
                <Image
                  key={course._id}
                  className={`peer relative w-[40px] bg-white p-1 rounded-full z-[1] ring-2 
                ${
                  course.name === "htmlcss"
                    ? "ring-red400"
                    : course.name === "javascript"
                    ? "ring-yellow500"
                    : course.name === "reactjs"
                    ? "ring-sky400"
                    : course.name === "nextjs"
                    ? "ring-gray800"
                    : course.name === "tailwindcss"
                    ? "ring-teal600"
                    : course.name === "materialUi"
                    ? "ring-blue600"
                    : "ring-stone700"
                } 
                  outline outline-offset-2 outline-3 outline-white min-[500px]:w-[60px] hover:scale-[1.07] min-[390px]:w-[45px]
                  peer-hover:backdrop-filter peer-hover:blur-sm peer-hover:animate-bounce hover:animate-pulse cursor-pointer duration-300`}
                  src={`${imageUrl}${course.image}`}
                  width={600}
                  height={600}
                  alt="course-image"
                />
              )
          )}
        </section>
      </div>
      <Box
        sx={{
          flexGrow: 1,
          p: "30px 30px 5px",
          borderRadius: "18px",
          m: "30px auto 0",
          boxShadow: "5px 5px 8px #dfdfdf, -5px -5px 8px #fbfbfb",
          "@media (min-width: 872px)": {
            maxWidth: "50%",
            m: "0 10px auto 0",
          },
        }}
      >
        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            height: 50,
            p: "0 0 20px",
          }}
        >
          <Typography
            variant="h6"
            component="h6"
            sx={{
              fontWeight: "80",
              fontSize: "12px",
              bgcolor: `${
                images[activeStep].devMode === "js"
                  ? "#facc15"
                  : images[activeStep].devMode === "reactjs"
                  ? "#38bdf8"
                  : "#374151"
              }`,
              color: "#fefefe",
              borderRadius: "10px",
              p: 1,
              "@media (min-width: 390px)": { fontSize: "14px" },
              "@media (min-width: 420px)": { fontSize: "15px" },
              "@media (min-width: 500px)": { fontSize: "18px" },
            }}
          >
            {images[activeStep].label}
          </Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: 180,
                    "@media (min-width: 420px)": {
                      height: 230,
                    },
                    "@media (min-width: 650px)": {
                      height: 300,
                    },
                    "@media (min-width: 872px)": {
                      aspectRatio: "3/2",
                      height: 250,
                    },
                    borderRadius: "10px",
                    display: "block",
                    overflow: "hidden",
                    width: "100%",
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          dir="ltr"
          sx={{ m: "15px auto" }}
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              <span className="w-fit font-bold text-indigo800">بعدی</span>
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft sx={{ color: "#3730a3" }} />
              ) : (
                <KeyboardArrowRight sx={{ color: "#3730a3" }} />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight sx={{ color: "#3730a3" }} />
              ) : (
                <KeyboardArrowLeft sx={{ color: "#3730a3" }} />
              )}
              <span className="w-fit font-bold text-indigo800">قبلی</span>
            </Button>
          }
        />
      </Box>
    </div>
  );
}

export default SwipeableTextMobileStepper;
