import CallCenter from "./CallCenter/CallCenter";
import HomeHero from "./HomeHero/HomeHero";
import Questions from "./Questions/Questions";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col gap-4 items-center text-gray-800">
      <HomeHero />
      <CallCenter />
      <Questions />
    </div>
  );
}
