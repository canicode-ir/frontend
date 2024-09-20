"use client";

import { usePathname } from "next/navigation";

//Icons & Images
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

function GoTotopDiv() {
  const pathName = usePathname();
  const scrollToTop = () => {
    const navZone = document.getElementById("navigation-bar");
    if (navZone) {
      navZone.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {pathName !== "/client-dashboard" && (
        <button
          id="goTotop"
          className="fixed w-[60px] h-[60px] bottom-10 mr-5 z-[100] bg-white/20 
         backdrop-filter backdrop-blur-lg rounded-full shadow-normal lg:mr-0"
          onClick={scrollToTop}
        >
          <KeyboardDoubleArrowUpIcon
            fontSize="medium"
            className="animate-bounce"
          />
        </button>
      )}
    </>
  );
}

export default GoTotopDiv;
