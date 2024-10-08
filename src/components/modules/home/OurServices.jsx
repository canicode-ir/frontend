"use client";

//Icons & Images
import ViewStreamIcon from "@mui/icons-material/ViewStream";

//Components
import OurServicesSwiper from "../../elements/OurServicesSwiper";

function OurServices() {
  return (
    <div
      className="relative w-full flex flex-col justify-between items-center 
  mt-20 ml-auto px-6 lg:p-0"
    >
      <div className="flex w-fit ml-auto justify-center items-center">
        <ViewStreamIcon
          sx={{ color: "#1f2937", fontSize: "20px", m: "0 0 0 7px" }}
        />
        <h5 className="font-heavey text-title text-md md:text-lg">
          خدمات آکادمی کَن آی کُد:{" "}
        </h5>
      </div>
      <OurServicesSwiper />
    </div>
  );
}

export default OurServices;
