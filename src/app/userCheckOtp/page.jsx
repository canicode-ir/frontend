import CheckOtp from "../../components/templates/checkOtp/CheckOtp";
import { Suspense } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

function page() {
  const cookieStore = cookies();
  const authToken = cookieStore.get("token")?.value;
  if (authToken) redirect("/client-dashboard");

  return (
    <Suspense>
      <div className="flex h-full w-full mx-auto px-4">
        <CheckOtp />
      </div>
    </Suspense>
  );
}

export default page;
