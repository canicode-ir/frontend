import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { BASE_URL } from "../../services/api";
import { Suspense } from "react";

//Components
import PaymentStatus from "../../components/templates/paymentStatus/PaymentStatus";
import Loading from "../../components/elements/Loading";

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
      <Suspense fallback={<Loading />}>
        <PaymentStatus searchParams={searchParams} userProfile={userProfile} />
      </Suspense>
    </div>
  );
}

export default page;
