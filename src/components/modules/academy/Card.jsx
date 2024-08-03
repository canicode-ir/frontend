"use client";

import Image from "next/image";

//Components
import Acordion from "../../elements/Acordion";

//Functions
import { addCommas } from "../../../helpers/functions";

//Images & Icons
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import PaymentIcon from "@mui/icons-material/Payment";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function Card({ course }) {
  const imageUrl = "https://canicode-app.storage.iran.liara.space/";
  return (
    <div
      className={`flex h-fit shadow-neomorphism rounded-2xl p-[3px] ${
        course.name !== "bootcamp"
          ? ""
          : "bg-gradient-to-b from-indigo900 to-pink700"
      }`}
    >
      <div className="flex flex-col w-full items-center bg-white rounded-[13px] p-4">
        <div className="relative flex flex-col w-full justify-center items-center p-1">
          {course.name !== "bootcamp" && (
            <span className="absolute top-0 right-0 bg-indigo50 text-indigo500 text-[13px] p-1 rounded-lg">
              {course.level === "starter"
                ? "سطح جونیور"
                : course.level === "mid-level"
                ? "سطح میدلول"
                : "سطح سنیور"}
            </span>
          )}
          <Image
            className={
              course.name !== "bootcamp"
                ? `relative w-[60px] h-[60px] bg-white p-3 rounded-full z-[1] ring-2 
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
            outline outline-offset-2 outline-3 outline-white`
                : "relative w-[75%] bg-white rounded-lg z-[1] outline outline-offset-2 outline-1 outline-white min-[500px]:w-[300px] min-[700px]:w-[70%]"
            }
            src={`${imageUrl}${course.image}`}
            width={600}
            height={600}
            alt="course-avatar"
          />
          <h2 className="relative w-fit text-white text-[15px] font-demibold z-[1] mt-3 mx-2">
            {course.title}
          </h2>
          <div
            className={`absolute bottom-0 w-full h-[60%] ${
              course.name === "htmlcss"
                ? "bg-gradient-to-r from-red400 to-red600"
                : course.name === "javascript"
                ? "bg-gradient-to-r from-amber300 to-yellow600"
                : course.name === "reactjs"
                ? "bg-gradient-to-r from-sky400 to-sky600"
                : course.name === "nextjs"
                ? "bg-gradient-to-r from-gray600 to-gray800"
                : course.name === "tailwindcss"
                ? "bg-gradient-to-r from-teal600 to-teal800"
                : course.name === "materialUi"
                ? "bg-gradient-to-r from-blue600 to-blue800"
                : course.name === "github"
                ? "bg-gradient-to-r from-stone600 to-stone800"
                : "bg-gradient-to-r from-sky600 via-sky800 to-violet600"
            } z-0 rounded-lg`}
          ></div>
        </div>
        <Acordion {...course} />
        <div className="flex w-full justify-between items-center mt-7 px-1 text-[13px]">
          <div className="flex items-center">
            <GraphicEqIcon fontSize="small" sx={{ m: "0 0 0 3px" }} />
            <span>مدت آموزش:</span>
          </div>
          <span className="font-extrabold text-gray700">{course.duration}</span>
        </div>
        <div className="flex w-full justify-between items-center mt-3 px-1 text-[13px]">
          <div className="flex items-center">
            <PaymentIcon fontSize="small" sx={{ m: "0 0 0 3px" }} />
            <span>هزینه ثبت نام:</span>
          </div>
          <span className="font-extrabold text-gray700">
            {addCommas(course.price)} تومان
          </span>
        </div>
        <div className="flex w-full justify-between items-center mt-3 px-1 text-[13px]">
          <div className="flex items-center">
            <div className="bg-gradient-to-b from-sky700 to-amber600 rounded-full ml-2 p-[2px]">
              <div className="w-[60px] h-[60px] bg-[url('/card/teacher.jpg')] bg-cover bg-center rounded-full"></div>
            </div>
            <span>مدرس دوره: </span>
          </div>
          <span className="font-extrabold text-gray700">
            {course.teacherName}
          </span>
        </div>
        <div className="block bg-gray200 h-[1px] w-[95%] mt-5 mx-auto"></div>
        <div
          id="btn"
          className="flex w-full justify-between items-center mt-5 mb-2"
        >
          <button
            className="w-fit flex justify-center items-center bg-indigo600 font-bold 
          text-white text-[13px] p-2 rounded-md duration-500 hover:opacity-70"
          >
            <PlaylistAddIcon fontSize="small" sx={{ m: "0 0 0 5px" }} />
            ثبت نام
          </button>
          <button
            className="w-fit flex justify-center items-center bg-indigo50 font-bold 
          text-indigo600 text-[13px] p-2 rounded-md duration-500 hover:ring-1 ring-indigo600 hover:bg-white"
          >
            <MoreVertIcon fontSize="small" sx={{ m: "0 0 0 5px" }} />
            بیشتر
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
