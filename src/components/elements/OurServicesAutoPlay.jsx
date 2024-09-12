import React from "react";
import Image from "next/image";
import Link from "next/link";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles/styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

//Icons & Images
import LabelIcon from "@mui/icons-material/Label";

function OurServicesAutoPlay({ ourServicesData }) {
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
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
    >
      {ourServicesData.map((service) => (
        <SwiperSlide
          key={service.id}
          className="flex flex-col w-[300px] justify-center items-center shadow-normal 
          rounded-lg"
        >
          <Image
            className="w-full aspect-video rounded-t-lg"
            src={`${imageUrl}${service.avatar}`}
            width={600}
            height={600}
            alt="avatar"
          />
          <div className="flex flex-col px-2 py-4 rounded-b-xl">
            <h2 className="font-bold text-lg text-center text-title">
              {service.icon}
              {service.title}
            </h2>
            <p className="font-regular text-justify text-detail mt-3 text-md">
              <LabelIcon fontSize="small" sx={{ ml: 0.5, rotate: "180deg" }} />
              {service.description}
            </p>
            {service.url ? (
              <Link
                className="ml-auto mt-3 bg-indigo50 text-indigo700 p-2 rounded-lg font-demibold text-sm transition-all duration-600
              hover:bg-gradient-to-r from-indigo800 to-indigo600 hover:text-white hover:scale-[1.05] hover:ring-4 ring-indigo100"
                href={service.url}
              >
                {service.buttonText}
              </Link>
            ) : (
              <button
                className="ml-auto mt-3 bg-indigo50 text-indigo700 p-2 rounded-lg font-demibold text-sm transition-all duration-600
              hover:bg-gradient-to-r from-indigo800 to-indigo600 hover:text-white hover:scale-[1.05] hover:ring-4 ring-indigo100"
                onClick={goToFormDialog}
              >
                {service.buttonText}
              </button>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default OurServicesAutoPlay;
