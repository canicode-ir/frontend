"use client";

import { useState } from "react";

//Images & Icons
import CloseIcon from "@mui/icons-material/Close";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";

function MyResume({ data: teacherName }) {
  const [expandMore, setExpandMore] = useState(false);
  const myResumeText = `عرض ارادت، سعید جلیلی هستم، کارشناسی مدیریت دانشگاه فردوسی مشهد
    و فارغ التحصیل رشته MBA از دانشگاه ساپینزا رُم - کشور زیبای
    ایتالیا. از سال 1401 بواسطه رشته ارشدم با زبان برنامه نویسی
    Rstudio (R) آشنا شدم. علاقه من به برنامه نویسی از اینجا شروع شد.
    پس از کمی تحقیق در مورد فیلد های متفاوت کاری در حوزه برنامه
    نویسی، وارد حوزه برنامه نویسی وب شدم و رفتم سراغ یادگیری. در
    ابتدا یکم اذیت شدم چون خیلی واسم گنگ بود اما، کم کم یکسری تجارب
    بدست آوردم که باعث شد سرعت پیشرفتم بیشتر بشه. رفتم سراغ
    جاوااسکریپت، بعد از اون ری اکت و در نهایت نکست جی اس. علاقه من
    به این حوزه همیشه باعث شده رو به جلو باشم و تکنولوژی های جدید رو
    یاد بگیرم و در نهایت اینجا، توی کَن آی کُد آموزشش بدم.`;

  const socialMedia = [
    {
      id: "instagram",
      url: "https://www.instagram.com/saeidj.dev?igsh=Z2swYXh3azI3bXZs",
      icon: (
        <InstagramIcon fontSize="medium" sx={{ color: "#6b7280", ml: 1 }} />
      ),
    },
    {
      id: "telegram",
      url: "https://t.me/WebsiteSupport_724",
      icon: (
        <TelegramIcon fontSize="medium" sx={{ color: "#6b7280", m: "0 4px" }} />
      ),
    },
    {
      id: "github",
      url: "https://github.com/Saeidemoun",
      icon: <GitHubIcon fontSize="medium" sx={{ color: "#6b7280", mr: 1 }} />,
    },
  ];

  return (
    <div
      id="my-resume"
      className="flex flex-col w-full justify-center items-center mt-10 px-4 py-5 shadow-normal rounded-lg"
    >
      <div className="flex flex-col w-full justify-center items-center">
        <div className="relative flex w-full">
          <div className="flex ml-auto items-center">
            <div
              className="w-[60px] h-[60px] ml-2 bg-[url('/card/teacher.jpg')] bg-cover bg-center shadow-normal ring-2 ring-white 
             outline outline-offset-4 outline-2 outline-white rounded-full"
            ></div>
            <div className="flex flex-col justify-center items-center">
              <span className="font-extrabold text-title text-md mt-3">
                {teacherName}
              </span>
              <span className="font-regular text-detail text-sm">
                مدرس دوره
              </span>
            </div>
          </div>
          <ul className="absolute bottom-0 left-0 flex w-fit justify-center items-center">
            {socialMedia.map((item) => (
              <li key={item.id}>
                <Link href={item.url} target="_blank">
                  {item.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex w-[90%] h-[1px] bg-gray100 mt-4 mx-auto"></div>
        <div className="relative flex w-full mt-3 text-justify justify-center items-center text-detail text-sm min-[320px]:text-md">
          <p className="px-2">
            {expandMore ? myResumeText : myResumeText.substring(0, 110)}
          </p>
          {!expandMore && (
            <div className="absolute flex w-full h-[80%] bottom-0 bg-gradient-to-t from-white to-white/30 mx-auto"></div>
          )}
        </div>
        <button
          className={`mt-3 ${
            expandMore
              ? "ring-1 ring-red600"
              : "ring-1 ring-blue700 bg-gradient-to-l from-blue600 via-blue500 to-blue400"
          } px-4 py-1 text-white rounded-lg
        text-sm`}
          onClick={() => setExpandMore(!expandMore)}
        >
          {expandMore ? (
            <span className="flex text-red600 justify-center items-center">
              <CloseIcon
                fontSize="small"
                sx={{ color: "#ef4444", fontWeight: "110", ml: 1 }}
              />
              بستن
            </span>
          ) : (
            "ادامه"
          )}
        </button>
      </div>
    </div>
  );
}

export default MyResume;
