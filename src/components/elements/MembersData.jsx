"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

//Images & Icons
import CloseIcon from "@mui/icons-material/Close";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import VerifiedIcon from "@mui/icons-material/Verified";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

//Members Avatar
import CeoAvatar from "../../../public/card/teacher.jpg";
import BackendAvatar from "../../../public/members/AlemohammadAvatar.jpg";

function MembersData() {
  const [membersData, setMembersData] = useState([
    {
      id: "ceo",
      memberName: "سعید جلیلی",
      title: "بنیان گذار و فرانت اند دولوپر",
      resume: `عرض ارادت، سعید جلیلی هستم، کارشناسی مدیریت دانشگاه فردوسی مشهد
        و فارغ التحصیل رشته MBA از دانشگاه ساپینزا رُم - کشور زیبای
        ایتالیا. از سال 1401 بواسطه رشته ارشدم با زبان برنامه نویسی
        Rstudio (R) آشنا شدم. علاقه من به برنامه نویسی از اینجا شروع شد.
        پس از کمی تحقیق در مورد فیلد های متفاوت کاری در حوزه برنامه
        نویسی، وارد حوزه برنامه نویسی وب شدم و رفتم سراغ یادگیری. در
        ابتدا یکم اذیت شدم چون خیلی واسم گنگ بود اما، کم کم یکسری تجارب
        بدست آوردم که باعث شد سرعت پیشرفتم بیشتر بشه. رفتم سراغ
        جاوااسکریپت، بعد از اون ری اکت و در نهایت نکست جی اس. علاقه من
        به این حوزه همیشه باعث شده رو به جلو باشم و تکنولوژی های جدید رو
        یاد بگیرم و در نهایت اینجا، توی کَن آی کُد آموزشش بدم.`,
      avatar: CeoAvatar,
      socialMedia: [
        {
          id: "instagram",
          url: "https://www.instagram.com/saeidj.dev?igsh=Z2swYXh3azI3bXZs",
        },
        { id: "telegram", url: "https://t.me/WebsiteSupport_724" },
        { id: "github", url: "https://github.com/Saeidemoun" },
      ],
      isOpen: false,
    },
    {
      id: "backend",
      memberName: "امیر آل محمد",
      title: "بک اند دولوپر",
      resume: `من امیر آل محمد هستم و از ۱۵ سالگی برنامه‌نویسی رو شروع کردم.
           یک سال بعدش به بک اند علاقه‌مند شدم
           و حالا دو ساله که به صورت حرفه‌ای توی این حوزه کار می‌کنم.
           تو این مدت، مهارت‌هام رو توی طراحی و پیاده‌سازی سیستم‌های پایدار
           و بهینه تقویت کردم و همیشه دنبال یادگیری و بهتر شدن هستم.`,
      avatar: BackendAvatar,
      socialMedia: [
        {
          id: "linkedIn",
          url: "https://www.linkedin.com/in/amir-alemohammad-39a1a1261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
        { id: "github", url: "https://github.com/Amir-Alemohammad" },
      ],
      isOpen: false,
    },
  ]);

  const socialMedia = [
    {
      id: "instagram",
      icon: (
        <InstagramIcon
          fontSize="small"
          sx={{
            color: "#6b7280",
            m: "0 4px",
            "@media(min-width: 370px)": {
              fontSize: "1.5rem",
            },
          }}
        />
      ),
    },
    {
      id: "telegram",
      icon: (
        <TelegramIcon
          fontSize="small"
          sx={{
            color: "#6b7280",
            m: "0 4px",
            "@media(min-width: 370px)": {
              fontSize: "1.5rem",
            },
          }}
        />
      ),
    },
    {
      id: "github",
      icon: (
        <GitHubIcon
          fontSize="small"
          sx={{
            color: "#6b7280",
            m: "0 4px",
            "@media(min-width: 370px)": {
              fontSize: "1.5rem",
            },
          }}
        />
      ),
    },
    {
      id: "linkedIn",
      icon: (
        <LinkedInIcon
          fontSize="small"
          sx={{
            color: "#6b7280",
            m: "0 4px",
            "@media(min-width: 370px)": {
              fontSize: "1.5rem",
            },
          }}
        />
      ),
    },
  ];

  const toggleMemberOpen = (id) => {
    setMembersData((prevMembers) =>
      prevMembers.map((member) =>
        member.id === id ? { ...member, isOpen: !member.isOpen } : member
      )
    );
  };

  return (
    <div
      id="members-data"
      className="flex flex-col w-full justify-center items-center mt-10 min-[826px]:flex-row min-[826px]:justify-between"
    >
      {membersData.map((member) => (
        <div
          key={member.id}
          className="flex flex-col w-full justify-center items-center 
          mb-10 shadow-normal rounded-lg px-4 py-5 min-[500px]:w-[450px] min-[650px]:ml-auto
          min-[826px]:mx-0 min-[826px]:mb-auto min-[826px]:w-[48%]"
        >
          <div className="relative flex w-full">
            <div className="flex ml-auto items-center">
              <Image
                className="w-[50px] aspect-square ml-2 shadow-normal ring-2 ring-white 
             outline outline-offset-4 outline-2 outline-white rounded-full min-[500px]:w-[60px]"
                src={member.avatar}
                width={600}
                height={600}
                alt="member-avatar"
              />
              <div className="flex flex-col justify-center items-center">
                <div className="flex justify-center items-center ml-auto">
                  <span className="font-extrabold text-title text-sm min-[350px]:text-md min-[500px]:text-lg">
                    {member.memberName}
                  </span>
                  <VerifiedIcon
                    fontSize="small"
                    sx={{ color: "#0284c7", mr: 0.5 }}
                  />
                </div>
                <span
                  className="font-regular text-detail text-[12px] ml-auto mt-2 
                min-[350px]:mt-1 min-[370px]:text-sm min-[500px]:text-md"
                >
                  {member.title}
                </span>
              </div>
            </div>
            <ul className="absolute top-0 left-0 flex w-fit justify-center items-center min-[350px]:top-1 min-[826px]:hidden">
              {socialMedia.map(
                (item) =>
                  member.socialMedia
                    .map((media) => media.id)
                    .includes(item.id) && (
                    <li key={item.id}>
                      <Link
                        href={`${
                          member.socialMedia.find(
                            (media) => media.id === item.id && media.url
                          ).url
                        }`}
                        target="_blank"
                      >
                        {item.icon}
                      </Link>
                    </li>
                  )
              )}
            </ul>
          </div>
          <div className="flex w-[90%] h-[1px] bg-gray100 mt-4 mx-auto"></div>
          <div className="relative flex w-full mt-3 justify-center items-center">
            <p className="font-regular text-detail text-sm text-justify min-[320px]:text-md px-2">
              {member.isOpen ? member.resume : member.resume.substring(0, 110)}
            </p>
            {!member.isOpen && (
              <div className="absolute flex w-full h-[80%] bottom-0 bg-gradient-to-t from-white to-white/30 mx-auto"></div>
            )}
          </div>
          <button
            className={`mt-3 ${
              member.isOpen
                ? "ring-1 ring-red600"
                : "ring-1 ring-blue700 bg-gradient-to-l from-blue600 via-blue500 to-blue400"
            } px-4 py-1 text-white rounded-lg
        text-sm`}
            onClick={() => toggleMemberOpen(member.id)}
          >
            {member.isOpen ? (
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
      ))}
    </div>
  );
}

export default MembersData;
