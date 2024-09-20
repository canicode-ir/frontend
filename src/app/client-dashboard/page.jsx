import axios from "axios";
import { BASE_URL } from "../../services/api";
import Cookies from "js-cookie";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

//Components
import ClientDashboard from "../../components/templates/client-dashboard/ClientDashboard";

function page() {
  const cookieStore = cookies();
  const authToken = cookieStore.get("token")?.value;
  if (!authToken) redirect("/userAuthentication");

  // const logOutHandler = async (e) => {
  //   e.preventDefault();
  //   const cookieStore = cookies();
  //   const token = cookieStore.get("token")?.value;
  //   try {
  //     await axios.put(
  //       `${BASE_URL}user/logout`,
  //       {},
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //         withCredentials: true,
  //       }
  //     );
  //     Cookies.remove("token");
  //     window.location.href = "/";
  //   } catch (error) {
  //     console.log(error.response);
  //   }
  // };

  return (
    <div>
      <ClientDashboard />
    </div>
  );
}

export default page;
