"use client";

import { useState, useEffect } from "react";

//Components
import NextCourseCard from "./NextCourseCard";

function NextCourseToLearnSuggestion({
  userLevel: { isStarter, isMidLevel, isSenior, isBootcamp },
  courses,
  userProfile: { fullName, course_participate },
  coursesByLevel: { starterCourses, midLevelCourses, advancedCourses },
  cartItems,
  isInCartCoursesIds,
  dispatch,
}) {
  const [remainedStarterCourses, setRemainedStarterCourses] = useState([]);
  const [remainedMidLevelCourses, setRemainedMidLevelCourses] = useState([]);
  const [remainedAdvancedCourses, setRemainedAdvancedCourses] = useState([]);

  const starterCoursesCount = starterCourses.length;
  const midLevelCoursesCount = midLevelCourses.length;
  const advancedLevelCoursesCount = advancedCourses.length;

  const starterCoursesParticipatedCount = course_participate.filter(
    (course) => course.level === "starter"
  ).length;

  const midLevelCoursesParticipatedCount = course_participate.filter(
    (course) => course.level === "mid-level"
  ).length;

  const advancedCoursesParticipatedCount = course_participate.filter(
    (course) => course.level === "advanced"
  ).length;

  useEffect(() => {
    if (isStarter && starterCoursesCount !== starterCoursesParticipatedCount) {
      const participatedStarterCoursesIds = course_participate
        .filter((course) => course.level === "starter")
        .map((course) => course._id);
      const notInvolvedStarterCourses = starterCourses.filter(
        (course) => !participatedStarterCoursesIds.includes(course._id)
      );
      setRemainedStarterCourses(notInvolvedStarterCourses);
    } else if (
      isMidLevel &&
      midLevelCoursesCount !== midLevelCoursesParticipatedCount
    ) {
      const participatedMidLevelCoursesIds = course_participate
        .filter((course) => course.level === "mid-level")
        .map((course) => course._id);
      const notInvolvedStarterCourses = midLevelCourses.filter(
        (course) => !participatedMidLevelCoursesIds.includes(course._id)
      );
      setRemainedMidLevelCourses(notInvolvedStarterCourses);
    } else if (
      isSenior &&
      advancedLevelCoursesCount !== advancedCoursesParticipatedCount
    ) {
      const participatedAdvancedCoursesIds = course_participate
        .filter((course) => course.level === "advanced-level")
        .map((course) => course._id);
      const notInvolvedStarterCourses = advancedCourses.filter(
        (course) => !participatedAdvancedCoursesIds.includes(course._id)
      );
      setRemainedAdvancedCourses(notInvolvedStarterCourses);
    } else null;
  }, []);

  return (
    <div className="flex flex-col w-full justify-between items-center mt-2">
      {isBootcamp ? (
        <p className="font-regular w-full text-justify text-[13px] px-2 md:text-sm">
          {fullName} عزیز، شما دانشجو بوت کمپ فرانت اند هستید، نیازی به تهیه
          سایر دوره ها ندارید. ✌
        </p>
      ) : isSenior && remainedAdvancedCourses.length ? (
        remainedAdvancedCourses.map((course) => (
          <NextCourseCard
            key={course._id}
            {...course}
            cartItems={cartItems}
            isInCartCoursesIds={isInCartCoursesIds}
            dispatch={dispatch}
          />
        ))
      ) : isSenior && !remainedAdvancedCourses.length ? (
        <p className="font-regular w-full text-justify text-[13px] px-2 md:text-sm">
          {fullName} عزیز سطح آموزشی شما، متخصص ارشد فرانت اند می باشد.
          بنابراین؛ نیازی به تهیه دوره دیگری ندارید. 🤞
        </p>
      ) : isMidLevel && remainedMidLevelCourses.length ? (
        <>
          {midLevelCourses.map(
            (course) =>
              course.name !== "reactjs" && (
                <NextCourseCard
                  key={course._id}
                  {...course}
                  cartItems={cartItems}
                  isInCartCoursesIds={isInCartCoursesIds}
                  dispatch={dispatch}
                />
              )
          )}
          {advancedCourses.map((course) => (
            <NextCourseCard
              key={course._id}
              {...course}
              cartItems={cartItems}
              isInCartCoursesIds={isInCartCoursesIds}
              dispatch={dispatch}
            />
          ))}
        </>
      ) : isMidLevel && !remainedMidLevelCourses.length ? (
        advancedCourses.map((course) => (
          <NextCourseCard
            key={course._id}
            {...course}
            cartItems={cartItems}
            isInCartCoursesIds={isInCartCoursesIds}
            dispatch={dispatch}
          />
        ))
      ) : isStarter && remainedStarterCourses.length ? (
        <>
          {starterCourses.map(
            (course) =>
              course.name !== "javascript" && (
                <NextCourseCard
                  key={course._id}
                  {...course}
                  cartItems={cartItems}
                  isInCartCoursesIds={isInCartCoursesIds}
                  dispatch={dispatch}
                />
              )
          )}
          {midLevelCourses.map((course) => (
            <NextCourseCard
              key={course._id}
              {...course}
              cartItems={cartItems}
              isInCartCoursesIds={isInCartCoursesIds}
              dispatch={dispatch}
            />
          ))}
        </>
      ) : (
        isStarter &&
        !remainedStarterCourses.length &&
        midLevelCourses.map((course) => (
          <NextCourseCard
            key={course._id}
            {...course}
            cartItems={cartItems}
            isInCartCoursesIds={isInCartCoursesIds}
            dispatch={dispatch}
          />
        ))
      )}
    </div>
  );
}

export default NextCourseToLearnSuggestion;
