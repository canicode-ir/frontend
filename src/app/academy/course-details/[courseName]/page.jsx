import { cookies } from "next/headers";
import { BASE_URL } from "../../../../services/api";

//Components
import CourseDetails from "../../../../components/templates/courseDetails/CourseDetails";
import CourseNotFound from "../../../../components/modules/CourseNotFound";

async function getData() {
  const res = await fetch(`${BASE_URL}course?page=1&limit=20`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function getUserProfile() {
  const cookieStore = cookies();
  const authToken = cookieStore.get("token")?.value;
  if (authToken) {
    try {
      const res = await fetch(`${BASE_URL}user/profile`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch user profile");
      }

      return res.json();
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log("No token found");
  }
}

async function page({ searchParams }) {
  const cookieStore = cookies();
  const authToken = cookieStore.get("token")?.value;

  const apiData = await getData();
  const courses = apiData.result;
  const coursesIds = courses.map((course) => course._id);
  const courseData = courses.find((course) => course._id === searchParams.cId);

  const userProfile = authToken && (await getUserProfile());
  const coursesParticipated = authToken && userProfile.course_participate;

  return (
    <div>
      {coursesIds.includes(searchParams.cId) ? (
        <CourseDetails
          course={courseData}
          coursesParticipated={coursesParticipated}
        />
      ) : (
        <CourseNotFound />
      )}
    </div>
  );
}

export default page;
