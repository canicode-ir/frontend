// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { EffectCube, Pagination } from "swiper/modules";

//Components
import SwiperCard from "./SwiperCard";
import OurServicesAutoPlay from "./OurServicesAutoPlay";

//Icons & Images
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from "@mui/icons-material/Work";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";

export default function OurServicesSwiper() {
  const ourServicesData = [
    {
      id: "education",
      avatar:
        "2e0614c7f754a8c300991b8105fc961be89261fe07fb8ae7f9eeb884fb3d7f53.e-Learning.jpg",
      icon: <HistoryEduIcon fontSize="small" sx={{ ml: 0.5 }} />,
      title: "آموزش آنلاین برنامه نویسی وب",
      description:
        "ما در کَن آی کُد تمام تلاش خودمون رو در ارائه به روز ترین آموزش ها در حوزه برنامه نویسی و طراحی وبسایت با نگاهی ویژه به بازار کار و نیز پروژه محور بودن و همچنین نیاز هر کارآموز؛ به کار برده ایم.",
      url: "/academy",
      buttonText: "دوره ها آموزشی",
    },
    {
      id: "educational-consultant",
      avatar:
        "9b722f396af23a0ea7bea97ac2493d3d7baef10bc24b874bf25360205d12ee4d.educational-consultant.jpg",
      icon: <PsychologyAltIcon fontSize="small" sx={{ ml: 0.5 }} />,
      title: "مشاوره آموزشی",
      description:
        "با ارسال درخواست مشاوره آموزشی از طریق لینک زیر، میتوانید از امکان یک جلسه مشاوره آنلاین رایگان به مد ت 15 دقیقه، بهره مند شوید. ما از  این طریق به کارآموزان محترم کمک می کنیم تا درست ترین تصمیم رو در روند آموزش خودشون بگیرند.",
      buttonText: " درخواست مشاوره آموزشی",
    },
    {
      id: "project-consultant",
      avatar:
        "093632c625e1826194add73446cfd58ccc554928f975674d9c60043f11563003.project-consultant.jpg",
      icon: <InfoIcon fontSize="small" sx={{ ml: 0.5 }} />,
      title: "مشاوره جهت انجام پروژه",
      description:
        "تمامی کارفرما های محترم میتوانند، از طریق لینک زیر، اطلاعات محدود و مختصری از پروژه خود را برای ما ارسال کنند. تیم فنی کَن آی کُد، پس از بررسی پروژه ظرف 48 ساعت کاری با کارفرما جهت مشاوره روند انجام پروژه تماس خواهد گرفت.",
      url: "/cooperation",
      buttonText: " درخواست مشاوره انجام پروژه",
    },
    {
      id: "cooperation",
      avatar:
        "ebec102a42356cbaf375a291b3a89a4f0314872b639215e49ad20e17020e6ae3.web-design.jpg",
      icon: <WorkIcon fontSize="small" sx={{ ml: 0.5 }} />,
      title: "انجام خدمات طراحی وبسایت",
      description:
        "تیم کَن آی کُد، تمامی خدمات مورد نیاز کارفرما محترم را اعم از؛ طراحی رابط کاربری، طراحی فرانت اند، طراحی بک اند و دیتابیس ارائه می دهد؛ همچنین برای تمامی پروژه هایی که به ما می سپارید، پس از پایان پروژه دو ماه پشتیبانی رایگان دریافت خواهید کرد.",
      url: "/cooperation",
      buttonText: "درخواست همکاری",
    },
  ];

  return (
    <>
      <div className="flex w-[95%] h-[550px] mx-auto min-[600px]:hidden">
        <Swiper
          effect={"cube"}
          grabCursor={true}
          cubeEffect={{
            shadow: false,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCube, Pagination]}
          className="w-full rounded-xl min-[482px]:max-w-[412px]"
        >
          {ourServicesData.map((service) => (
            <SwiperSlide key={service.id}>
              <SwiperCard {...service} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="hidden w-[95%] mx-auto mt-10 min-[600px]:flex">
        <OurServicesAutoPlay ourServicesData={ourServicesData} />
      </div>
    </>
  );
}
