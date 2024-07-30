"use client";

//Icons & Images
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

function GoTotopDiv() {
  const scrollToTop = () => {
    const navZone = document.getElementById("navigation-bar");
    if (navZone) {
      navZone.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      className="fixed w-[60px] h-[60px] bottom-5 mr-5 z-[100] bg-white/80 
         backdrop-filter backdrop-blur-lg rounded-full shadow-inset lg:mr-0"
      onClick={scrollToTop}
    >
      <KeyboardDoubleArrowUpIcon fontSize="medium" className="animate-bounce" />
    </button>
  );
}

export default GoTotopDiv;
