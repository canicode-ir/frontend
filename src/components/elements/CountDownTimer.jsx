"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { useRouter } from "next/navigation";
import { BASE_URL } from "../../services/api";

//Functions
import { notify } from "../../utils/Toast";

//Icons, Images
import QrCode2Icon from "@mui/icons-material/QrCode2";
import UTurnLeftIcon from "@mui/icons-material/UTurnLeft";

function CountDownTimer() {
  const [timeLeft, setTimeLeft] = useState(60);
  const [isLoading, setIsLoading] = useState(false);

  const searchParams = useSearchParams();
  const userMobile = searchParams.get("phone");

  const router = useRouter();

  useEffect(() => {
    // If timeLeft is greater than 0, set up an interval
    if (timeLeft > 0) {
      const intervalId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1); // Decrease time by 1
      }, 1000); // Update every second

      // Clear the interval on component unmount or when timeLeft changes
      return () => clearInterval(intervalId);
    }
  }, [timeLeft]);

  const authToLogin = async (e) => {
    e.preventDefault();
    const data = { mobile: userMobile };
    setIsLoading(true);
    try {
      await axios.post(`${BASE_URL}auth/login`, data);
      setIsLoading(false);
      notify("کد تایید مجدداً ارسال شد", "success");
      setTimeLeft(60);
    } catch (error) {
      setIsLoading(false);
      notify("مشکلی در ارتباط با سرور رخ داده است", "error");
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div className="flex w-full ml-auto mt-4 mb-2 justify-between items-center">
      {timeLeft > 0 ? (
        <span
          className={`w-fit text-indigo500 font-demibold bg-purple50 py-1 px-2 rounded-md ${
            timeLeft < 20 && "animate-pulse font-bold text-red700 bg-red50"
          }`}
        >
          زمان باقی مانده - {formatTime(timeLeft)}{" "}
          {timeLeft >= 60 ? "دقیقه" : "ثانیه"}
        </span>
      ) : (
        <button
          type="submit"
          className={`w-fit ${
            !isLoading
              ? "text-indigo900 hover:bg-purple100 hover:px-2 hover:py-1 transition-all duration-500"
              : "text-white bg-sky700 p-1"
          } font-demibold text-sm rounded-md`}
          onClick={authToLogin}
        >
          {!isLoading
            ? "درخواست ارسال مجدد کد"
            : "در حال ارسال مجدد کد تایید..."}
          {!isLoading && <QrCode2Icon sx={{ mr: 1 }} />}
        </button>
      )}
      <button
        className="w-fit mr-auto text-gray600 font-regular transition-all duration-500 hover:bg-gray100 hover:text-gray700 hover:font-bold hover:px-2 hover:py-1 rounded-md"
        onClick={() => router.replace("/userAuthentication")}
      >
        مرحله قبلی
        <UTurnLeftIcon fontSize="small" />
      </button>
    </div>
  );
}

export default CountDownTimer;
