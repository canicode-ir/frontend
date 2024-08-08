"use client";

import Image from "next/image";

//Images & Icons & animations
import htmlCssBanner from "../../../../../public/coursesBanners/HTMLCSSBanner.jpg";
import jsBanner from "../../../../../public/coursesBanners/JSBanner.jpg";
import reactBanner from "../../../../../public/coursesBanners/ReactBanner.jpg";
import nextBanner from "../../../../../public/coursesBanners/NextJsBanner.jpg";
import materialUiBanner from "../../../../../public/coursesBanners/MUIBanner.jpg";
import tailwindBanner from "../../../../../public/coursesBanners/TailwindCssBanner.jpg";
import githubBanner from "../../../../../public/coursesBanners/githubBanner.jpg";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import Groups2Icon from "@mui/icons-material/Groups2";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

//Functions
import { addCommas } from "../../../../helpers/functions";

function CourseDetailsMain({
  title,
  headlines,
  description,
  teacherName,
  priceAfterDiscount,
  price,
  discount,
  duration,
  salesCount,
  image,
  name,
  level,
}) {
  const imageUrl = "https://canicode-app.storage.iran.liara.space/";
  const studentsCount = 34;
  const titlesCount = headlines.length;
  const episodesArrayCount = headlines.map((item) => item.episode.length);
  const totalEpisodesCount = episodesArrayCount.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const totalDurationArr = headlines.map((item) =>
    item.episode.map((item) => item.duration)
  );
  const totalDurationArrToNumber = totalDurationArr.map((arr) =>
    arr.map((item) => +item)
  );
  const totalDurationInMinutes = totalDurationArrToNumber
    .map((arr) =>
      arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    )
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  const totalDurationInHours = totalDurationInMinutes / 60;
  const totalDurationHours = Math.trunc(totalDurationInHours);
  const remainingInMinutes =
    +parseFloat((totalDurationInHours - totalDurationHours).toString()).toFixed(
      2
    ) * 60;
  const eachEpisodeOnAve = Math.ceil(
    totalDurationInMinutes / totalEpisodesCount
  );

  const courseFeatures = [
    {
      id: "students",
      value: studentsCount,
      img: <Groups2Icon fontSize="medium" />,
    },
    {
      id: "episodes",
      value: totalEpisodesCount,
      img: <FormatListNumberedIcon fontSize="medium" />,
    },
    {
      id: "duration",
      value: { totalDurationHours, remainingInMinutes },
      img: <AvTimerIcon fontSize="medium" />,
    },
    {
      id: "support",
      value: "7/24",
      img: <SupportAgentIcon fontSize="medium" />,
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col mr-auto">
        <div className="relative flex flex-col">
          <Image
            className="rounded-b-md shadow-inset"
            src={
              name === "htmlcss"
                ? htmlCssBanner
                : name === "javascript"
                ? jsBanner
                : name === "reactjs"
                ? reactBanner
                : name === "nextjs"
                ? nextBanner
                : name === "materialUi"
                ? materialUiBanner
                : name === "tailwindcss"
                ? tailwindBanner
                : name === "github"
                ? githubBanner
                : `${imageUrl}${image}`
            }
            width={600}
            height={600}
            alt="course-banner"
          />
        </div>
        <div
          id="course-mainDetails"
          className="flex flex-col justify-center items-center mt-5 px-4"
        >
          <h2 className="font-fat w-full text-center text-title text-xl">
            {title}
          </h2>
          <p className="w-full mt-3 text-justify text-detail">{description}</p>
          <div className="flex w-full justify-between items-center mt-5">
            <button
              className="bg-gradient-to-l from-blue700 to-blue500 px-1 py-2 rounded-lg font-extrabold text-white
             hover:bg-gradient-to-b hover:ring-4 ring-blue200 transition-all duration-500"
            >
              ثبت نام در دوره
            </button>
            <div className="flex justify-center items-center">
              <p className="font-black ml-1 text-slate800 text-lg">
                {addCommas(priceAfterDiscount)}
              </p>
              <span className="text-slate500">تومان</span>
            </div>
          </div>
        </div>
        <div id="course-features" className="grid grid-cols-2 gap-4 mt-8 px-4">
          {courseFeatures.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col justify-center items-center p-2 rounded-lg transition-all duration-300 
              bg-purple50 text-indigo950 shadow-normal hover:shadow-inset hover:ring-2 ring-purple50"
            >
              {feature.img}
              <span className="mt-2 text-[12px] font-demibold min-[370px]:text-sm">
                {feature.id === "students"
                  ? `${feature.value}${" "}دانشجو`
                  : feature.id === "episodes"
                  ? `${feature.value}${" "}اپیزود | در ${titlesCount} سرفصل`
                  : feature.id === "duration" &&
                    feature.value.remainingInMinutes <= 0
                  ? `${feature.value}${" "}ساعت`
                  : feature.id === "duration" &&
                    feature.value.remainingInMinutes > 0
                  ? `${feature.value.totalDurationHours}${" "}ساعت و ${
                      feature.value.remainingInMinutes
                    } دقیقه`
                  : `پشتیبانی دائمی${" "}(${feature.value})`}
              </span>
            </div>
          ))}
        </div>
        <p
          className="flex w-[92%] p-2 mt-5 mx-auto rounded-lg items-center justify-center
        text-[12px] text-slate600 ring-1 ring-slate600 text-center font-regular min-[370px]:text-sm"
        >{`هر اپیزود به طور میانگین: ${eachEpisodeOnAve} دقیقه فقط زمان می بره ⌚`}</p>
      </div>
    </div>
  );
}

export default CourseDetailsMain;
