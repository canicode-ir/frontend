"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ToastContainerComponent from "../../elements/ToastContainer";

//Components
import Card from "../../modules/academy/Card";
import CourseFilter from "../../modules/academy/CourseFilter";

//Images & Icons
import ViewStreamIcon from "@mui/icons-material/ViewStream";

const Academy = ({ courses }) => {
  const [isAllCourses, setIsAllCourses] = useState(true);
  const [isJuniorCourses, setIsJuniorCourses] = useState(false);
  const [isMidLevelCourses, setIsMidLevelCourses] = useState(false);
  const [isSeniorcourses, setIsSeniorCourses] = useState(false);
  const [isBootcamp, setIsBootcamp] = useState(false);

  const [juniorCourses, setJuniorCourses] = useState([]);
  const [midLevelCourses, setMidLevelCourses] = useState([]);
  const [seniorCourses, setSeniorCourses] = useState([]);
  const [bootcampCourses, setIsBootcampCourses] = useState([]);
  const pathName = usePathname();

  const showCourses = {
    setIsAllCourses,
    setIsJuniorCourses,
    setIsMidLevelCourses,
    setIsSeniorCourses,
    setIsBootcamp,
  };

  useEffect(() => {
    const junior = courses.filter((course) => course.level === "starter");
    setJuniorCourses(junior);
    const midLevel = courses.filter((course) => course.level === "mid-level");
    setMidLevelCourses(midLevel);
    const senior = courses.filter(
      (course) => course.level === "advanced-level"
    );
    setSeniorCourses(senior);
    const bootcamps = courses.filter((course) => course.level === "bootcamp");
    setIsBootcampCourses(bootcamps);
  }, []);

  return (
    <>
      <div
        className={`flex flex-col justify-between items-center ${
          pathName === "/academy" ? "mt-10" : "mt-20"
        } ml-auto px-6 lg:p-0`}
      >
        <div className="flex w-fit ml-auto justify-center items-center">
          <ViewStreamIcon
            sx={{ color: "#1f2937", fontSize: "20px", m: "0 0 0 7px" }}
          />
          <h5 className="font-heavey text-title text-md md:text-lg">
            دوره های آموزشی:{" "}
          </h5>
        </div>
        {pathName === "/academy" && (
          <p className="text-justify py-2 text-detail text-md mt-5 md:text-lg">
            ما در آکادمی آموزشی کَن آی کُد؛ سعی کرده ایم تا به روز ترین و
            پرکاربرد ترین مفاهیم را در حوزه تخصصی برنامه نویسی فرانت اند، در
            اختیار شما همکاران و کارآموزان عزیز قرار دهیم. شما می توانید دوره
            های آکادمی ما رو در پایین مشاهده فرمایید.
          </p>
        )}
      </div>
      <CourseFilter courses={courses} {...showCourses} />
      <div
        className="grid grid-cols-1 gap-8 w-full min-[700px]:grid-cols-2 min-[1000px]:grid-cols-3 p-6
        lg:p-0 min-[1000px]:mt-10"
      >
        {isAllCourses
          ? courses.map((course) => <Card key={course._id} course={course} />)
          : isJuniorCourses && juniorCourses.length > 0
          ? juniorCourses.map((course) => (
              <Card key={course._id} course={course} />
            ))
          : isMidLevelCourses && midLevelCourses.length > 0
          ? midLevelCourses.map((course) => (
              <Card key={course._id} course={course} />
            ))
          : isSeniorcourses && seniorCourses.length > 0
          ? seniorCourses.map((course) => (
              <Card key={course._id} course={course} />
            ))
          : isBootcamp &&
            bootcampCourses.length > 0 &&
            bootcampCourses.map((course) => (
              <Card key={course._id} course={course} />
            ))}
        <ToastContainerComponent />
      </div>
    </>
  );
};

export default Academy;
