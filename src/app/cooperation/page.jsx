import { redirect } from "next/navigation";
import { cookies } from "next/headers";

//Components
import Cooperation from "../../components/templates/cooperation/Cooperation";

function page() {
  const cookieStore = cookies();
  const authToken = cookieStore.get("token")?.value;
  if (!authToken) redirect("/userAuthentication");
  return (
    <div>
      <Cooperation />
    </div>
  );
}

export default page;
