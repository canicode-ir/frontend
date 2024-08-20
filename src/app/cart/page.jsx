import { cookies } from "next/headers";

//Components
import UserCart from "../../components/templates/userCart/UserCart";

function page() {
  const cookieStore = cookies();
  const authToken = cookieStore.get("token")?.value;

  return (
    <div>
      <UserCart userToken={authToken} />
    </div>
  );
}

export default page;
