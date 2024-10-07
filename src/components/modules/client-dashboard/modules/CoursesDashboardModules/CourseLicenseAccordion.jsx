"use client";

import { useState } from "react";

//functions
import { notify } from "../../../../../utils/Toast";

//Icons & Images
import QrCodeIcon from "@mui/icons-material/QrCode";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import TelegramIcon from "@mui/icons-material/Telegram";

function CourseLicenseAccordion({ name, title, level, _id, course_licenses }) {
  const [isCopied, setIsCopied] = useState(false);
  const hasBoughtCourse = course_licenses.find(
    (item) => item.course._id === _id
  );
  const courseLicense = hasBoughtCourse && hasBoughtCourse.code;

  const copyHandler = () => {
    if (courseLicense) {
      navigator.clipboard.writeText(courseLicense);
      setTimeout(() => {
        notify("لایسنس با موفقیت کپی شد", "success");
        setIsCopied(true);
      }, 500);
      setTimeout(() => {
        setIsCopied(false);
      }, 5000);
    } else {
      setTimeout(() => {
        notify("لایسنس این دوره موجود نیست!", "error");
      }, 500);
    }
  };

  return (
    <li
      className={`flex flex-col w-full justify-between bg-gradient-to-l
${
  name === "htmlcss"
    ? "from-red700 via-red500 to-red700"
    : name === "javascript"
      ? "from-yellow700 via-yellow500 to-yellow700"
      : name === "reactjs"
        ? "from-sky700 via-sky500 to-sky700"
        : name === "nextjs"
          ? "from-slate950 via-slate800 to-slate950"
          : name === "materialUi"
            ? "from-blue700 via-blue500 to-blue700"
            : name === "tailwindcss"
              ? "from-cyan950 via-cyan700 to-cyan950"
              : name === "github"
                ? "from-rose950 via-rose700 to-rose950"
                : "from-indigo950 via-indigo600 to-indigo950"
}
  my-2 items-center p-2 rounded-lg transition-all duration-600 
  hover:bg-gradient-to-b`}
    >
      <div className="flex w-full justify-between items-center">
        <h3 className="font-demibold text-[12px] min-[500px]:text-sm">
          <QrCodeIcon fontSize="small" sx={{ mr: 1 }} />
          {title}
        </h3>
        <span
          className="hidden font-light text-[10px] text-white
        min-[380px]:block min-[400px]:text-[12px]"
        >
          {level === "starter"
            ? "مقدماتی"
            : level === "mid-level"
              ? "میدلول"
              : level === "advanced-level"
                ? "سنیور"
                : "بوت کمپ"}
        </span>
      </div>
      <div className="w-full flex flex-col mt-4 px-1">
        <p
          className="break-all w-full font-ultralight text-[12px] text-justify ltr mr-auto
        p-1 backdrop-filter backdrop-blur-md bg-white/30 rounded-md md:text-sm"
        >
          {courseLicense && `${courseLicense.substring(0, 45)} ...`}
        </p>
        <div className="w-full flex justify-between items-center px-1 py-3">
          <button
            id="copy-license"
            className="font-regular text-[12px] text-white 
          backdrop-filter backdrop-blur-md bg-slate950/60 p-1 rounded-md
          transition-all duration-500 hover:opacity-70 hover:ring-2 ring-indigo700/70"
            onClick={copyHandler}
          >
            <ContentCopyIcon fontSize="small" sx={{ mr: 0.5, width: "15px" }} />
            {isCopied ? "لایسنس کپی شده است" : "کپی لایسنس"}
          </button>
          <button
            className="font-regular text-[12px] text-white 
          backdrop-filter backdrop-blur-md bg-blue800/20 p-1 rounded-md
          transition-all duration-500 hover:opacity-70 hover:ring-2 ring-blue700/70"
          >
            <TelegramIcon fontSize="small" sx={{ mr: 0.5, width: "15px" }} />
            گروه تلگرام دوره
          </button>
        </div>
      </div>
    </li>
  );
}

export default CourseLicenseAccordion;
