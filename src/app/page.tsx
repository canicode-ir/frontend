import HomePage from '../components/modules/home/HomePage';
import WebsiteSamples from "../components/modules/home/WebsiteSamples";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HomePage />
      <WebsiteSamples />
    </main>
  );
}
