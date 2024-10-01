import AboutUs from "../../components/templates/aboutUs/AboutUs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

function page() {
  const cookieStore = cookies();
  const authToken = cookieStore.get("token")?.value;
  if(!authToken) redirect('/userAuthentication');
  
  return (
    <div>
      <AboutUs />
    </div>
  );
}

export default page;
