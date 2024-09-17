"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Cookies from "js-cookie";
import axios from "axios";
import { BASE_URL } from "../../../../services/api";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchUserCart,
  selectUserCartItems,
} from "../../../../../redux/features/cartSlice";

//Components
import MyResume from "../../../elements/MyResume";
import ScrollableTabsButtonAuto from "../../../elements/CourseSectionFilter";
import CourseDescription from "../courseDetails/modules/CourseDescription";
import CourseTitles from "../courseDetails/modules/CourseTitles";
import CourseFAQ from "../courseDetails/modules/CourseFAQ";

//Images & Icons & animations
import htmlCssBanner from "../../../../../public/coursesBanners/HTMLCSSBanner.jpg";
import jsBanner from "../../../../../public/coursesBanners/JSBanner.jpg";
import reactBanner from "../../../../../public/coursesBanners/ReactBanner.jpg";
import nextBanner from "../../../../../public/coursesBanners/NextJsBanner.jpg";
import materialUiBanner from "../../../../../public/coursesBanners/MUIBanner.jpg";
import tailwindBanner from "../../../../../public/coursesBanners/TailwindCssBanner.jpg";
import githubBanner from "../../../../../public/coursesBanners/githubBanner.jpg";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import Groups2Icon from "@mui/icons-material/Groups2";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import DeleteIcon from "@mui/icons-material/Delete";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import buttonLoading from "../../../../../public/general/buttonLoading.gif";
import AdjustIcon from "@mui/icons-material/Adjust";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

//Functions
import { addCommas } from "../../../../helpers/functions";
import { notify } from "../../../../utils/Toast";

function CourseDetailsMain({
  title,
  headlines,
  description,
  teacherName,
  priceAfterDiscount,
  price,
  discount,
  duration,
  salesCount,
  image,
  name,
  level,
  _id,
  coursesParticipated,
  allCourses,
}) {
  const [showCourseDescription, setShowCourseDescription] = useState(true);
  const [requiredCourse, setRequiredCourse] = useState({});
  const searchParams = useSearchParams();

  const [showCourseTitles, setShowCourseTitles] = useState(false);
  const [showCourseFAQ, setShowCourseFAQ] = useState(false);
  const [isBoughtCourse, setIsBoughtCourse] = useState(false);
  const [cardButtonIsLoading, setCardButtonIsLoading] = useState(false);
  const showSections = {
    setShowCourseDescription,
    setShowCourseTitles,
    setShowCourseFAQ,
  };

  const authToken = Cookies.get("token");
  const router = useRouter();

  //connecting RTK
  const { cartItems, loading, error } = useSelector(selectUserCartItems);
  const dispatch = useDispatch();

  const selectedCourses = cartItems.orders && cartItems.orders;
  const isInCartCoursesIds =
    cartItems.orders &&
    selectedCourses.length &&
    selectedCourses.map((item) => item.course._id);

  const [expandMore, setExpandMore] = useState(false);
  const imageUrl = "https://canicode-app.storage.iran.liara.space/";
  const studentsCount = salesCount + 13;
  const titlesCount = headlines.length;
  const episodesArrayCount = headlines.map((item) => item.episode.length);
  const totalEpisodesCount = episodesArrayCount.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const totalDurationArr = headlines.map((item) =>
    item.episode.map((item) => item.duration)
  );
  const totalDurationArrToNumber = totalDurationArr.map((arr) =>
    arr.map((item) => +item)
  );
  const totalDurationInMinutes = totalDurationArrToNumber
    .map((arr) =>
      arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    )
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  const totalDurationInHours = totalDurationInMinutes / 60;
  const totalDurationHours = Math.trunc(totalDurationInHours);
  const remainingInMinutes =
    +parseFloat((totalDurationInHours - totalDurationHours).toString()).toFixed(
      2
    ) * 60;
  const eachEpisodeOnAve = Math.ceil(
    totalDurationInMinutes / totalEpisodesCount
  );

  const courseFeatures = [
    {
      id: "students",
      value: studentsCount,
      img: <Groups2Icon fontSize="medium" />,
    },
    {
      id: "episodes",
      value: totalEpisodesCount,
      img: <FormatListNumberedIcon fontSize="medium" />,
    },
    {
      id: "duration",
      value: { totalDurationHours, remainingInMinutes },
      img: <AvTimerIcon fontSize="medium" />,
    },
    {
      id: "support",
      value: "7/24",
      img: <SupportAgentIcon fontSize="medium" />,
    },
  ];

  const addCourseToCart = async (e) => {
    e.preventDefault();
    setCardButtonIsLoading(true);
    const token = Cookies.get("token");
    const id = _id;
    setTimeout(async () => {
      if (token) {
        try {
          await axios.post(
            `${BASE_URL}cart/${id}`,
            {
              courseId: id,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          dispatch(fetchUserCart());
          setTimeout(() => {
            setCardButtonIsLoading(false);
          }, 500);
          notify("دوره با موفقیت به سبد خرید افزوده شد", "success");
        } catch (error) {
          if (error.response.status === 400) {
            notify("دوره در سبد خرید موجود است", "error");
          } else {
            notify("لطفاً مجدد تلاش فرمایید", "error");
          }
        }
      } else {
        setCardButtonIsLoading(true);
        router.push("/userAuthentication");
        setTimeout(() => {
          setCardButtonIsLoading(false);
        }, 500);
      }
    }, 1000);
  };

  const deleteCourseFromCart = async (e) => {
    e.preventDefault();
    const token = Cookies.get("token");
    if (token) {
      try {
        await axios.delete(
          `${BASE_URL}cart/${_id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
          {
            courseId: _id,
          }
        );
        dispatch(fetchUserCart());
        notify("دوره از سبد خرید حذف شد", "success");
      } catch (error) {
        notify("خطایی در سیستم رخ داده است، لطفاً مجدد امتحان کنید", "error");
      }
    }
  };

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const coursesParticipatedIds =
    authToken && coursesParticipated.map((course) => course._id);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchUserCart());
    if (authToken) setIsBoughtCourse(coursesParticipatedIds.includes(_id));
    const requiredCourseObj = allCourses.find((course) =>
      name === "htmlcss" && name === "bootcamp"
        ? null
        : name === "javascript"
        ? course.name === "htmlcss"
        : name === "reactjs"
        ? course.name === "javascript"
        : name === "nextjs"
        ? course.name === "reactjs"
        : name === "tailwindcss"
        ? course.name === "reactjs"
        : name === "materialUi"
        ? course.name === "reactjs"
        : course.name === "javascript"
    );
    setRequiredCourse(requiredCourseObj);
  }, []);

  return (
    <div className="relative flex flex-col h-full w-full justify-center items-center min-[900px]:p-4 lg:p-0">
      <div
        className="flex flex-col justify-between items-center w-full 
      min-[900px]:flex-row min-[900px]:mt-10 min-[900px]:px-4 min-[900px]:py-8 min-[900px]:shadow-normal min-[900px]:rounded-2xl"
      >
        <Image
          className="rounded-b-md shadow-inset w-full min-[900px]:max-w-[50%] min-[900px]:aspect-video 
          min-[900px]:mb-auto min-[900px]:ml-10 min-[900px]:rounded-lg"
          src={
            name === "htmlcss"
              ? htmlCssBanner
              : name === "javascript"
              ? jsBanner
              : name === "reactjs"
              ? reactBanner
              : name === "nextjs"
              ? nextBanner
              : name === "materialUi"
              ? materialUiBanner
              : name === "tailwindcss"
              ? tailwindBanner
              : name === "github"
              ? githubBanner
              : `${imageUrl}${image}`
          }
          width={600}
          height={600}
          alt="course-banner"
        />
        <div
          id="course-mainDetails"
          className="flex flex-col justify-center items-center mt-5 px-4 min-[900px]:mt-0
           min-[900px]:p-0 min-[900px]:mb-auto"
        >
          <h2
            className="font-fat w-full text-center text-title text-md min-[320px]:text-lg min-[600px]:text-2xl 
          min-[900px]:text-lg min-[930px]:text-xl min-[900px]:text-right"
          >
            {title}
          </h2>
          <div className="relative flex w-full mt-3 text-justify justify-center items-center">
            <p className="px-2 font-demibold text-detail text-sm leading-6 min-[900px]:text-[15px]">
              {expandMore ? description : description.substring(0, 175)}
            </p>
            {!expandMore && (
              <div className="absolute flex w-full h-[80%] bottom-0 bg-gradient-to-t from-white to-white/30 mx-auto"></div>
            )}
          </div>
          <div className="relative w-full flex justify-center items-center mt-10">
            <div className="w-[35%] h-[1px] bg-gray200 ml-auto"></div>
            <div
              className="absolute flex w-[50px] h-[50px] rounded-full bg-white shadow-normal cursor-pointer 
            outline outline-offset-4 outline-2 outline-white justify-center items-center"
              onClick={() => setExpandMore(!expandMore)}
            >
              {expandMore ? (
                <ExpandLessIcon
                  fontSize="small"
                  sx={{ m: "0 auto", color: "#374151" }}
                />
              ) : (
                <ExpandMoreIcon
                  fontSize="small"
                  sx={{ m: "0 auto", color: "#374151" }}
                />
              )}
            </div>
            <div className="w-[35%] h-[1px] bg-gray200 mr-auto"></div>
          </div>
          <div
            className="flex w-full mt-10 mx-auto justify-between items-center
             bg-indigo50 rounded-lg p-1"
            id="course-level"
          >
            <span className="font-regular text-indigo800 text-sm p-1 bg-white rounded-md">
              <AdjustIcon fontSize="small" sx={{ ml: 0.3 }} />
              {level === "starter"
                ? "سطح جونیور"
                : level === "mid-level"
                ? "سطح میدلول"
                : level === "advanced-level"
                ? "سطح سنیور"
                : "بوت کمپ فرانت اند"}
            </span>
            <span
              className="w-fit mr-auto bg-white font-regular text-sm 
            text-indigo800 rounded-md p-1 cursor-pointer transition-all duration-500 hover:scale-[1.04]"
              onClick={() =>
                name !== "htmlcss" &&
                name !== "bootcamp" &&
                Object.keys(requiredCourse).length &&
                router.push(
                  `/academy/course-details/${requiredCourse.name}` +
                    "?" +
                    createQueryString("cId", `${requiredCourse._id}`)
                )
              }
            >
              <PlayArrowIcon fontSize="small" sx={{ ml: 0.3 }} />
              {name === "htmlcss"
                ? "این دوره پیش نیازی ندارد"
                : name === "bootcamp"
                ? "همه چی از صفر تا پیشرفته"
                : `پیش نیاز: دوره ${
                    name === "javascript"
                      ? "HTML و CSS"
                      : name === "reactjs"
                      ? "جاوااسکریپت"
                      : name === "nextjs"
                      ? "ری اکت"
                      : name === "tailwindcss"
                      ? "ری اکت"
                      : name === "materialUi"
                      ? "ری اکت"
                      : "جاوااسکریپت"
                  }`}
            </span>
          </div>
          <div className="flex w-full justify-between items-center mt-5">
            {!authToken ? (
              <>
                <button
                  className="w-[120px] bg-gradient-to-l from-blue700 to-blue500 px-1 py-2 rounded-lg font-extrabold text-white
             hover:bg-gradient-to-b hover:ring-4 ring-blue200 transition-all duration-500"
                  onClick={addCourseToCart}
                >
                  {!cardButtonIsLoading ? (
                    "ثبت نام در دوره"
                  ) : (
                    <Image
                      className="w-5 mx-auto"
                      src={buttonLoading}
                      width={600}
                      height={600}
                      alt="loading"
                    />
                  )}
                </button>
                <div className="flex justify-center items-center">
                  <p className="font-black ml-1 text-slate800 text-lg">
                    {addCommas(price)}
                  </p>
                  <span className="text-slate500">تومان</span>
                </div>
              </>
            ) : cartItems.orders &&
              isInCartCoursesIds.length > 0 &&
              isInCartCoursesIds.includes(_id) ? (
              <>
                <button
                  className="w-fit flex justify-center items-center bg-white font-medium ring-1 ring-red400
          text-red500 text-[13px] p-2 rounded-md transition-all duration-500 hover:opacity-70"
                  onClick={deleteCourseFromCart}
                >
                  <DeleteIcon fontSize="small" sx={{ m: "0 0 0 5px" }} />
                  <span>حذف از سبد خرید</span>
                </button>
                <div className="flex justify-center items-center">
                  <p className="font-black ml-1 text-slate800 text-lg">
                    {addCommas(price)}
                  </p>
                  <span className="text-slate500">تومان</span>
                </div>
              </>
            ) : (
              <>
                {!isBoughtCourse ? (
                  <button
                    className="w-[120px] bg-gradient-to-l from-blue700 to-blue500 px-1 py-2 rounded-lg font-extrabold text-white
             hover:bg-gradient-to-b hover:ring-4 ring-blue200 transition-all duration-500"
                    onClick={addCourseToCart}
                  >
                    {!cardButtonIsLoading ? (
                      "ثبت نام در دوره"
                    ) : (
                      <Image
                        className="w-5 mx-auto"
                        src={buttonLoading}
                        width={600}
                        height={600}
                        alt="loading"
                      />
                    )}
                  </button>
                ) : (
                  <button
                    className="w-fit flex justify-center items-center bg-white font-bold ring-1 ring-indigo500
          text-indigo700 text-[14px] p-2 rounded-md duration-500 hover:opacity-70"
                    onClick={() => router.push("/client-dashboard")}
                  >
                    <SmartDisplayIcon fontSize="small" sx={{ ml: 0.3 }} />
                    مشاهده دوره
                  </button>
                )}
                <div className="flex justify-center items-center">
                  <p className="font-black ml-1 text-slate800 text-lg">
                    {addCommas(price)}
                  </p>
                  <span className="text-slate500">تومان</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div
        className="flex flex-col w-full justify-centre items-center mx-auto mt-10 p-4 
      min-[900px]:flex-row-reverse min-[900px]:p-0"
      >
        <div
          className="flex flex-col w-full justify-center items-center min-[900px]:mb-auto min-[900px]:shadow-normal 
        min-[900px]:rounded-2xl min-[900px]:px-4 min-[900px]:py-6"
        >
          <div id="course-features" className="grid grid-cols-2 gap-4 w-full">
            {courseFeatures.map((feature) => (
              <div
                key={feature.id}
                className="flex flex-col justify-center items-center p-2 rounded-lg transition-all duration-300 
                bg-purple50 text-indigo950 shadow-normal hover:shadow-inset hover:ring-2 ring-purple50 min-[600px]:py-4"
              >
                {feature.img}
                <span className="mt-2 text-[12px] font-demibold min-[370px]:text-sm">
                  {feature.id === "students"
                    ? `${feature.value}${" "}دانشجو`
                    : feature.id === "episodes"
                    ? `${feature.value}${" "}اپیزود | در ${titlesCount} سرفصل`
                    : feature.id === "duration" &&
                      feature.value.remainingInMinutes <= 0
                    ? `${feature.value}${" "}ساعت`
                    : feature.id === "duration" &&
                      feature.value.remainingInMinutes > 0
                    ? `${feature.value.totalDurationHours}${" "}ساعت و ${
                        feature.value.remainingInMinutes
                      } دقیقه`
                    : `پشتیبانی دائمی${" "}(${feature.value})`}
                </span>
              </div>
            ))}
          </div>
          <p
            className="flex w-full p-2 mt-5 mx-auto rounded-lg items-center justify-center
          text-[12px] rounded-lg transition-all duration-300 bg-purple50 text-indigo950 shadow-normal 
          hover:shadow-inset hover:ring-2 ring-purple50 text-center font-regular min-[370px]:text-sm min-[600px]:text-lg
          min-[900px]:text-sm"
          >{`هر اپیزود به طور میانگین: ${eachEpisodeOnAve} دقیقه فقط زمان می بره ⌚`}</p>
          <MyResume data={teacherName} />
        </div>
        <section
          id="course-sections"
          className="sticky top-5 flex flex-col w-full justify-center items-center w-full mt-10 min-[900px]:mt-0
          min-[900px]:mb-auto min-[900px]:ml-5 min-[900px]:shadow-normal min-[900px]:rounded-2xl min-[900px]:px-4 min-[900px]:py-6"
        >
          <ScrollableTabsButtonAuto data={name} {...showSections} />
          <main className="flex w-full justify-center items-center mx-auto mt-5 shadow-normal rounded-lg z-[10]">
            {showCourseDescription ? (
              <CourseDescription data={name} />
            ) : showCourseTitles ? (
              <CourseTitles data={headlines} />
            ) : (
              <CourseFAQ data={name} />
            )}
          </main>
        </section>
      </div>
    </div>
  );
}

export default CourseDetailsMain;
