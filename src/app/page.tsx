import { BASE_URL } from '../services/api';
import { cookies } from "next/headers";
import { redirect } from 'next/navigation';

//Components
import Academy from '../components/templates/academy/Academy';
import HomePage from '../components/modules/home/HomePage';
import WebsiteSamples from "../components/modules/home/WebsiteSamples";
import RoadMap from '../components/modules/home/RoadMap';
import OurServices from '../components/modules/home/OurServices';

async function getData() {
  const res = await fetch(`${BASE_URL}course?page=1&limit=20`, {cache: 'no-store'})
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

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

export default async function Home() {
  const cookieStore = cookies();
  const authToken = cookieStore.get("token")?.value;
  if(!authToken) redirect('/userAuthentication');

  const apiData = await getData();
  const courses = apiData.result;
  
  const userProfile = authToken && (await getUserProfile());
  const coursesParticipated = authToken && userProfile.course_participate;

  return (
    <main className="flex flex-col min-h-screen items-center">
      <HomePage />
      <OurServices />
      <WebsiteSamples courses={courses}/>
      <RoadMap />
      <Academy authToken={authToken} courses={courses} coursesParticipated={coursesParticipated}/>
    </main>
  );
}
