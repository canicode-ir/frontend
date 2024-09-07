import Academy from "../../components/templates/academy/Academy";
import { BASE_URL } from "../../services/api";

async function getData() {
  const res = await fetch(`${BASE_URL}course?page=1&limit=20`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function page() {
  const apiData = await getData();
  const courses = apiData.result;
  return (
    <div className="px-2">
      <Academy courses={courses} />
    </div>
  );
}

export default page;
