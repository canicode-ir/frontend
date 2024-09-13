"use client";

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import PropTypes from "prop-types"; // Import PropTypes

function FAQAccordion({ data }) {
  const [open, setOpen] = React.useState(false);

  return (
    <Accordion
      sx={{
        width: "100%",
        p: "8px",
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
          justifyContent: "space-between", // Fixed here
          alignItems: "center",
        }}
      >
        <div
          className={`w-[4px] h-[40px] bg-indigo200 ml-2 mr-1 rounded-tl-2xl rounded-bl-2xl 
          ${
            open ? "bg-indigo500 ring-2 ring-indigo100" : ""
          } transition-all duration-500`}
        ></div>
        <h3 className="flex items-center justify-center font-extrabold text-[13px] text-title min-[500px]:text-[15px]">
          {data.question}
        </h3>
      </AccordionSummary>
      <AccordionDetails>
        <p className="text-justify font-regular text-detail text-sm">
          {data.answer}
        </p>
        {data.id === "course-access" && (
          <div className="grid grid-cols-2 gap-4 w-full justify-between items-center mt-3 min-[478px]:flex min-[478px]:w-fit min-[478px]:ml-auto">
            {data.spotPlayerLinks.map((link) => (
              <Link
                className={`p-[2px] bg-gradient-to-t odd:ml-auto even:mr-auto ${
                  link.id === "windows"
                    ? "from-rose500 to-rose400"
                    : link.id === "android"
                    ? "from-green600 to-green400"
                    : link.id === "macos"
                    ? "from-slate600 to-slate400"
                    : "from-blue600 to-blue400"
                } w-fit rounded-lg`}
                key={link.id}
                href={link.url}
              >
                <div className="flex bg-white p-2 w-full items-center justify-center ml-auto rounded-md">
                  {link.img}
                  <span className="font-regular mr-1 text-sm">
                    {link.title}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </AccordionDetails>
    </Accordion>
  );
}

FAQAccordion.propTypes = {
  data: PropTypes.shape({
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    spotPlayerLinks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        img: PropTypes.node.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default FAQAccordion;
