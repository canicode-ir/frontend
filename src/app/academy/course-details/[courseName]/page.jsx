//Components
import CourseDetails from "../../../../components/templates/courseDetails/CourseDetails";
import CourseNotFound from "../../../../components/modules/CourseNotFound";
import { BASE_URL } from "../../../../services/api";

async function getData() {
  const res = await fetch(`${BASE_URL}course?page=1&limit=20`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function page({ searchParams }) {
  const apiData = await getData();
  const courses = apiData.result;
  const coursesIds = courses.map((course) => course._id);
  const courseData = courses.find((course) => course._id === searchParams.cId);

  return (
    <div>
      {coursesIds.includes(searchParams.cId) ? (
        <CourseDetails course={courseData} />
      ) : (
        <CourseNotFound />
      )}
    </div>
  );
}

export default page;
