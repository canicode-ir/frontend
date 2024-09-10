import { BASE_URL } from '../services/api';

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

export default async function Home() {
  const apiData = await getData();
  const courses = apiData.result;

  return (
    <main className="flex flex-col min-h-screen items-center">
      <HomePage />
      <OurServices />
      <WebsiteSamples courses={courses}/>
      <RoadMap />
      <Academy courses={courses}/>
    </main>
  );
}
