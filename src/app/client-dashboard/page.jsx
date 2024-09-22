import axios from "axios";
import { BASE_URL } from "../../services/api";
import Cookies from "js-cookie";
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

  return (
    <div>
      <ClientDashboard userProfile={userProfile} authToken={authToken} />
    </div>
  );
}

export default page;
