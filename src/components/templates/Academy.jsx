'use client';

import { useEffect, useState } from 'react';

//Components
import Card from '../modules/academy/Card';
import CourseFilter from '../modules/academy/CourseFilter'

//Images & Icons
import ViewStreamIcon from '@mui/icons-material/ViewStream';

const Academy = ({ courses }) => {

  console.log(courses)

  const [isAllCourses, setIsAllCourses] = useState(true);
  const [isJuniorCourses, setIsJuniorCourses] = useState(false);
  const [isMidLevelCourses, setIsMidLevelCourses] = useState(false);
  const [isSeniorcourses, setIsSeniorCourses] = useState(false);

  const [juniorCourses, setJuniorCourses] = useState([]);
  const [midLevelCourses, setMidLevelCourses] = useState([]);
  const [seniorCourses, setSeniorCourses] = useState([]);

  const showCourses = {isAllCourses, setIsAllCourses, 
    isJuniorCourses, setIsJuniorCourses, 
    isMidLevelCourses, setIsMidLevelCourses,
    isSeniorcourses, setIsSeniorCourses}

  useEffect(() => {
    const junior = courses.filter(course => course.level === 'starter');
    setJuniorCourses(junior);
    const midLevel = courses.filter(course => course.level === 'mid-level');
    setMidLevelCourses(midLevel);
    const senior = courses.filter(course => course.level === 'advanced-level');
    setSeniorCourses(senior);
  }, [])

  return (
    <>
      <div className='flex flex-col justify-between items-center mt-10 px-6 min-[1000px]:p-0'>
        <div className='flex w-fit ml-auto justify-center items-center'>
          <ViewStreamIcon sx={{color: '#1f2937', fontSize: '20px', m: '0 0 0 7px'}} />
          <h5 className='font-heavey text-title text-md md:text-lg'>دوره های آموزشی: </h5>
        </div>
        <p className='text-justify py-2 text-detail text-md mt-5 md:text-lg'>
          ما در آکادمی آموزشی کَن آی کُد؛ سعی کرده ایم تا به روز ترین و پرکاربرد ترین مفاهیم را در حوزه تخصصی برنامه نویسی 
          فرانت اند، در اختیار شما همکاران و کارآموزان عزیز قرار دهیم. شما می توانید دوره های آکادمی ما رو در پایین مشاهده فرمایید.
        </p>    
      </div>
      <CourseFilter courses={courses} {...showCourses}/>
      <div className='grid grid-cols-1 gap-8 min-[700px]:grid-cols-2 min-[1000px]:grid-cols-3 p-6
        min-[1000px]:p-0 min-[1000px]:mt-10'>
        {
          isAllCourses ? 
          courses.map((course) => (
            <Card key={course._id} course={course}/>
          )) : isJuniorCourses && juniorCourses.length > 0 ? 
          juniorCourses.map((course) => (
            <Card key={course._id} course={course}/>
          )) : isMidLevelCourses && midLevelCourses.length > 0 ? 
          midLevelCourses.map((course) => (
            <Card key={course._id} course={course}/>
          )) : isSeniorcourses && seniorCourses.length > 0 &&
          seniorCourses.map((course) => (
            <Card key={course._id} course={course}/>
          ))
        }
      </div>
    </>
  );
};

export default Academy;
