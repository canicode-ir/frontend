import { BASE_URL } from "../../services/api";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

//Components
import ClientDashboard from "../../components/templates/client-dashboard/ClientDashboard";

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
      return null; // Return null in case of an error
    }
  } else {
    console.log("No token found");
    return null; // Return null when there's no token
  }
}

async function page() {
  const cookieStore = cookies();
  const authToken = cookieStore.get("token")?.value;
  if (!authToken) redirect("/userAuthentication");
  const userProfile = await getUserProfile();
  if (!userProfile) {
    redirect("/"); // redirect to an error page or handle it
    return; // ensure to return after redirect
  }
  const userCourseParticipate = userProfile.course_participate;
  const userLevel = {
    isStarter: userCourseParticipate.some(
      (course) => course.level === "starter"
    ),
    isMidLevel: userCourseParticipate.some(
      (course) => course.level === "mid-level"
    ),
    isSenior: userCourseParticipate.some(
      (course) => course.level === "advanced-level"
    ),
    isBootcamp: userCourseParticipate.some(
      (course) => course.level === "bootcamp"
    ),
  };

  //UserPayments
  const userPayments = userProfile.payments;
  const confirmedPayments = userPayments.filter((payment) => !!payment.verify);
  const notVerifiedPayments = userPayments.filter((payment) => !payment.verify);
  const userPaymentsData = { confirmedPayments, notVerifiedPayments };

  //AllCourses
  const apiData = await getAllCourses();
  const courses = apiData.result;
  const starterCourses = courses.filter((course) => course.level === "starter");
  const midLevelCourses = courses.filter(
    (course) => course.level === "mid-level"
  );
  const advancedCourses = courses.filter(
    (course) => course.level === "advanced-level"
  );

  const coursesByLevel = { starterCourses, midLevelCourses, advancedCourses };

  return (
    <div>
      <ClientDashboard
        userProfile={userProfile}
        authToken={authToken}
        userLevel={userLevel}
        courses={courses}
        coursesByLevel={coursesByLevel}
        userPaymentsData={userPaymentsData}
      />
    </div>
  );
}

export default page;
