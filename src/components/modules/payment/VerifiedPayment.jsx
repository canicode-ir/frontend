"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

//Icons & Images
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DialpadIcon from "@mui/icons-material/Dialpad";
import MoneyIcon from "@mui/icons-material/Money";
import ReceiptIcon from "@mui/icons-material/Receipt";
import VerifiedIcon from "@mui/icons-material/Verified";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import HomeIcon from "@mui/icons-material/Home";
import TollIcon from "@mui/icons-material/Toll";

//functions
import { addCommas } from "../../../helpers/functions";

function VerifiedPayment({
  data: {
    amount,
    transactionNumber,
    userProfile: { fullName, mobile, course_participate },
  },
}) {
  const dataToShow = [
    {
      id: "userName",
      icon: (
        <AccountCircleIcon
          fontSize="small"
          sx={{ ml: 0.3, color: "#64748b" }}
        />
      ),
      title: "نام و نام خانوادگی: ",
      data: fullName,
    },
    {
      id: "mobile",
      icon: <DialpadIcon fontSize="small" sx={{ ml: 0.3, color: "#0ea5e9" }} />,
      title: "شماره همراه کاربر: ",
      data: mobile,
    },
    {
      id: "price",
      icon: <MoneyIcon fontSize="small" sx={{ ml: 0.3, color: "#f97316" }} />,
      title: "مبلغ پرداخت شده: ",
      data: addCommas(amount),
    },
    {
      id: "paymentStatus",
      icon: (
        <VerifiedIcon fontSize="small" sx={{ ml: 0.3, color: "#14b8a6" }} />
      ),
      title: "وضعیت پرداخت: ",
      data: "انجام شده",
    },
    {
      id: "transactionNumber",
      icon: <ReceiptIcon fontSize="small" sx={{ ml: 0.3, color: "#0e7490" }} />,
      title: "شماره تراکنش: ",
      data: transactionNumber,
    },
  ];
  const imageUrl = "https://canicode-app.storage.iran.liara.space/";

  const router = useRouter();

  return (
    <div className="flex flex-col w-fit justify-between items-center my-10">
      <p className="p-2 text-center text-indigo800 bg-indigo50 font-bold text-[14px] rounded-xl leading-7 shadow-normal">
        پرداخت شما با موفقیت انجام شد، برای مشاهده لایسنس به پنل کاربری و قسمت
        لایسنس ها مراجعه فرمایید.
      </p>
      <ul
        className="flex flex-col w-full justify-between items-center divide-y divide-slate200
      shadow-normal rounded-xl p-4 mt-5"
      >
        {dataToShow.map((item) => (
          <li
            className="flex w-full justify-between items-center p-2"
            key={item.id}
          >
            <h3 className="font-extrabold text-title text-sm">
              {item.icon} {item.title}
            </h3>
            <span
              className={`font-regular text-sm text-detail ${
                item.id === "paymentStatus" &&
                "bg-green50 p-1 rounded-lg text-green800"
              }`}
            >
              {item.data} {item.id === "price" && "تومان"}
            </span>
          </li>
        ))}
      </ul>
      <div className="flex flex-col w-full mt-10" id="course_participate">
        <h2 className="p-2 font-demibold text-title">
          <TollIcon fontSize="small" sx={{ ml: 0.3 }} />
          دوره هایی که تا الان خریداری کرده اید:
        </h2>
        <ul className="flex flex-col w-full justify-between items-center mt-3">
          {course_participate.map((course) => (
            <li
              className="flex w-full justify-between items-center shadow-normal rounded-xl p-2 mb-3"
              key={course.id}
            >
              <div className="flex w-fit justify-center items-center">
                <Image
                  className="w-10 aspect-square"
                  src={`${imageUrl}${course.image}`}
                  width={600}
                  height={600}
                  alt="course-img"
                />
                <h4 className="mr-3 font-bold text-title text-sm">
                  {course.title}
                </h4>
              </div>
              <span className="mr-auto font-regular text-detail text-sm">
                {course.duration}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <section className="flex w-full mt-5 justify-between items-center py-2 px-1">
        <button
          className="bg-gradient-to-r from-indigo500 to-indigo700 py-[5px] px-4 cursor-pointer transition-all duration-500
        font-bold text-white rounded-lg ring-2 ring-indigo500 hover:ring-4 hover:ring-indigo50"
          onClick={() => router.replace("/client-dashboard")}
        >
          <AssignmentIndIcon fontSize="small" sx={{ ml: 0.3 }} />
          پنل کاربری
        </button>
        <button
          className="bg-white py-[5px] px-4 font-bold text-indigo700 cursor-pointer transition-all duration-500
        ring-2 ring-indigo500 rounded-lg hover:opacity-50"
          onClick={() => router.replace("/")}
        >
          <HomeIcon fontSize="small" sx={{ ml: 0.3 }} />
          صفحه اصلی
        </button>
      </section>
    </div>
  );
}

export default VerifiedPayment;
