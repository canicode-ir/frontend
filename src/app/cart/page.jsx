import { cookies } from "next/headers";
import axios from "axios";
import { BASE_URL } from "../../services/api";

//Components
import UserCart from "../../components/templates/userCart/UserCart";

async function getData() {
  const cookieStore = cookies();
  const authToken = cookieStore.get("token")?.value;
  if (authToken) {
    const res = await axios.get(
      `${BASE_URL}cart`,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      },
      {
        cache: "no-store",
      }
    );
    if (res.status !== 200) {
      throw new Error("مشکلی در ارتباط با سرور ایجاد شده است!");
    }
    return res.data;
  }
}

async function page() {
  const cookieStore = cookies();
  const authToken = cookieStore.get("token")?.value;
  const cartData = await getData();
  return (
    <div>
      <UserCart token={authToken} cartData={cartData} />
    </div>
  );
}

export default page;
