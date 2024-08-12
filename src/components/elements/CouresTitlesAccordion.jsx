"use client";

import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

//Images & Icons
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";

export default function AccordionUsage({ title, episode }) {
  const [open, setOpen] = useState(false);
  const videoUrl = "https://canicode-app.storage.iran.liara.space/";
  const totalDurationArr = episode.map((item) => +item.duration);
  const totalDurationInMinutes = totalDurationArr.reduce(
    (acc, cur) => acc + cur,
    0
  );

  return (
    <Accordion
      sx={{
        width: "100%",
      }}
      expanded={open}
      onChange={() => setOpen(!open)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon fontSize="small" />}
        aria-controls="panel1-content"
        id="panel1-header"
        sx={{
          display: "flex",
          width: "100%",
          height: "50px",
          padding: 0,
          margin: 0,
          justifyContent: "between",
          alignItems: "center",
        }}
      >
        <div
          className="w-[4px] h-[40px] bg-indigo200 ml-2 mr-1 rounded-tl-2xl rounded-bl-2xl 
          open:bg-indigo500 open:ring-2 ring-indigo100 transition-all duration-500"
          open={open}
        ></div>
        <p className="flex items-center justify-center">
          <span className="font-extrabold text-[13px] text-title">{title}</span>
          <span className="hidden mx-1 min-[370px]:block">|</span>
          <span className="hidden font-regular text-[12px] text-title min-[370px]:block">
            {totalDurationInMinutes} دقیقه
          </span>
        </p>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: 0 }}>
        <ul className="flex flex-col w-full justify-between items-center p-1">
          {episode.map((item) => (
            <li
              key={item.title}
              className="flex w-full justify-start items-center px-2 py-3 mb-2 shadow-inset rounded-lg"
            >
              <SmartDisplayIcon
                fontSize="small"
                sx={{ color: "#f97316", mb: "auto" }}
              />
              <div className="relative flex mr-2 w-full items-center justify-between">
                <div className="flex flex-col w-fit items-center justify-center text-[13px] mb-3">
                  <p className="font-demibold text-title">{item.title}</p>
                  <span className="ml-auto mt-1 font-medium text-detail text-[12px]">
                    {item.duration} دقیقه
                  </span>
                </div>
                {item.video !== "string" && item.video !== "" ? (
                  <Link
                    className="absolute  bottom-0 left-1 ring-2 ring-indigo700 
                  rounded-sm px-1 py-[1px] hover:ring-4 hover:ring-purple200 hover:bg-indigo700 transition-all duration-500"
                    href={`${videoUrl}${item.video}`}
                    passHref
                    target="_blank"
                  >
                    <div className="flex w-full justify-center items-center text-sm text-indigo700 hover:text-white transition-all duration-500">
                      <CloudDownloadOutlinedIcon
                        fontSize="small"
                        sx={{ ml: 1 }}
                      />
                      <span>مشاهده</span>
                    </div>
                  </Link>
                ) : (
                  <div className="absolute  bottom-0 left-1 ring-2 ring-gray300 rounded-sm px-1 py-[1px]">
                    <div className="flex w-full justify-center items-center text-gray300 text-sm">
                      <LockOutlinedIcon fontSize="small" sx={{ ml: 1 }} />
                      <span>قفل است</span>
                    </div>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </AccordionDetails>
    </Accordion>
  );
}
