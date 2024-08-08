//Components
import CourseDetails from "../../../../components/templates/courseDetails/CourseDetails";

async function getData() {
  const res = await fetch("https://cnc.liara.run/course?page=1&limit=20", {
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
  const courseData = courses.find((course) => course._id === searchParams.cId);

  return (
    <div>
      <CourseDetails course={courseData} />
    </div>
  );
}

export default page;
