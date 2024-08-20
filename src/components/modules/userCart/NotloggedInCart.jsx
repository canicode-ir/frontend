"use client";

import Link from "next/link";
import { Player } from "@lottiefiles/react-lottie-player";

//Images & Icons
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

function NotloggedInCart() {
  return (
    <div className="flex flex-col w-full justify-between items-center mb-10 min-[580px]:max-w-[450px]">
      <Player
        autoplay
        loop
        src="https://lottie.host/fb803054-23a7-4fb1-8389-375fb5372094/LHLdoujOv2.json"
        style={{ height: "300px", width: "300px" }}
      ></Player>
      <div className="flex flex-col justify-center items-center mt-10">
        <p className="text-center font-bold text-title text-md leading-6">
          دوست عزیزم 💜 ، دسترسی شما به سبد خرید بعد از ثبت نام و ورود به حساب
          کاربری ایجاد می شود.
        </p>
        <div className="flex items-center w-fit mt-5 mx-auto text-sm">
          <Link
            className="font-demibold text-indigo500 ring-1 ring-indigo500 p-2 rounded-md ml-3
            bg-white hover:bg-gradient-to-l from-indigo600 to-indigo400 hover:text-white hover:ring-2 hover:ring-indigo200 transition-all duration-500"
            href="/userAuthentication"
          >
            ورود | ثبت نام
          </Link>
          <Link
            className="flex justify-center items-center font-demibold text-sky600 p-2"
            href="/"
          >
            صفحه اصلی
            <ChevronLeftIcon sx={{ mr: "1px", color: "#0284c7" }} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotloggedInCart;
