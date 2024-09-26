import { BASE_URL } from "../../services/api";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

//Components
import ClientDashboard from "../../components/templates/client-dashboard/ClientDashboard";

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
  const userProfile = await getUserProfile();
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
  const userPayments = userProfile.payments;
  const confirmedPayments = userPayments.filter((payment) => !!payment.verify);
  const notVerifiedPayments = userPayments.filter((payment) => !payment.verify);

  return (
    <div>
      <ClientDashboard
        userProfile={userProfile}
        authToken={authToken}
        userLevel={userLevel}
      />
    </div>
  );
}

export default page;
