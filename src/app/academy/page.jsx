import { cookies } from "next/headers";
import Academy from "../../components/templates/academy/Academy";
import { BASE_URL } from "../../services/api";
import { redirect } from "next/navigation";

async function getAllCourses() {
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

async function page() {
  const cookieStore = cookies();
  const authToken = cookieStore.get("token")?.value;
  if (!authToken) redirect("/userAuthentication");

  const apiData = await getAllCourses();
  const courses = apiData.result;
  const userProfile = authToken && (await getUserProfile());
  const coursesParticipated = authToken && userProfile.course_participate;

  return (
    <div className="px-2">
      <Academy
        courses={courses}
        coursesParticipated={coursesParticipated}
        authToken={authToken}
      />
    </div>
  );
}

export default page;
