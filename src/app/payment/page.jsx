import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import axios from "axios";
import { BASE_URL } from "../../services/api";

//Components
import PaymentStatus from "../../components/templates/paymentStatus/PaymentStatus";

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
  const userProfile = authToken && (await getUserProfile());

  if (!authToken) redirect("/userAuthentication");

  return (
    <div>
      <PaymentStatus
        authToken={authToken}
        searchParams={searchParams}
        userProfile={userProfile}
      />
    </div>
  );
}

export default page;
