"use client";

import Image from "next/image";
import Link from "next/link";

//Icons & Images
import LabelIcon from "@mui/icons-material/Label";

function SwiperCard({ id, avatar, title, description, url, buttonText, icon }) {
  const imageUrl = "https://canicode-app.storage.iran.liara.space/";

  const goToFormDialog = () => {
    const formDialog = document.getElementById("form-dialog");
    const homePageButtonsDiv = document.getElementById("homepage-btn");
    if (formDialog && homePageButtonsDiv) {
      homePageButtonsDiv.scrollIntoView({ behavior: "smooth" });
      formDialog.classList.add("form-dialog"); // Add the animation
      // Use a timeout to remove the class after 5 seconds
      setTimeout(() => {
        formDialog.classList.remove("form-dialog");
      }, 5000);
    } else {
      return null;
    }
  };

  return (
    <div className="flex flex-col h-[510px] rounded-xl shadow-normal min-[482px]:max-w-[412px] min-[600px]:ml-10">
      <Image
        className="w-full aspect-[2/1.3] rounded-t-xl"
        src={`${imageUrl}${avatar}`}
        width={600}
        height={600}
        alt="service-img"
      />
      <div className="flex flex-col px-2 py-4 rounded-b-xl">
        <h3 className="font-bold text-lg text-center text-title">
          {icon}
          {title}
        </h3>
        <div className="flex flex-col h-full px-2 justify-between items-center">
          <p className="font-regular text-justify text-detail mt-3 text-md">
            <LabelIcon fontSize="small" sx={{ ml: 0.5, rotate: "180deg" }} />
            {description}
          </p>
          {url ? (
            <Link
              className="ml-auto mt-3 bg-indigo50 text-indigo700 p-2 rounded-lg font-demibold text-sm transition-all duration-600
              hover:bg-gradient-to-r from-indigo800 to-indigo600 hover:text-white hover:scale-[1.05] hover:ring-4 ring-indigo100"
              href={url}
            >
              {buttonText}
            </Link>
          ) : (
            <button
              className="ml-auto mt-3 bg-indigo50 text-indigo700 p-2 rounded-lg font-demibold text-sm transition-all duration-600
              hover:bg-gradient-to-r from-indigo800 to-indigo600 hover:text-white hover:scale-[1.05] hover:ring-4 ring-indigo100"
              onClick={goToFormDialog}
            >
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default SwiperCard;
