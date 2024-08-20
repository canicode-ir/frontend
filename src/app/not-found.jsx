"use client";

import Image from "next/image";
import Link from "next/link";

//Images & Icons
import notFound404 from "../../public/notFound/notFound404.jpg";
function notFound() {
  return (
    <div className="flex flex-col justify-between items-center w-full px-4 mt-10">
      <Image src={notFound404} width={600} height={600} alt="not-found" />
      <div className="flex flex-col w-full justify-between items-center mt-5 p-3">
        <p className="font-demibold text-title text-center md:max-w-[700px]">
          آدرس صفحه مورد نظر شما، یافت نشد. در صورتیکه از طریق لینکی ناشناس به
          این صفحه دعوت شده اید؛ حتماً با شماره تماس پشتیبانی در پایین صفحه تماس
          گرفته و به ما اطلاع دهید.
        </p>
        <Link
          href="/"
          className="w-full text-center mt-10 bg-gradient-to-l from-indigo600 to-indigo800 p-3 rounded-2xl 
            font-demibold text-white duration-500 hover:opacity-70
            min-[390px]:w-fit"
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </div>
  );
}

export default notFound;
