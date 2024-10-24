import Community from "./Community/Community";
import HomeHero from "./HomeHero/HomeHero";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col gap-4 items-center text-gray-800">
      <HomeHero />
      <Community />
    </div>
  );
}
