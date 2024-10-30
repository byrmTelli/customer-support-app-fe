import { useRef } from "react";
import CallCenter from "./CallCenter/CallCenter";
import HomeHero from "./HomeHero/HomeHero";
import Questions from "./Questions/Questions";

export default function HomePage() {
  // States
  const callCenterRef = useRef<HTMLDivElement>(null);
  const questionsRef = useRef<HTMLDivElement>(null);
  // Handlers

  const scrollToCallCenter = () => {
    callCenterRef.current?.scrollIntoView({ behavior: "smooth" });
    console.log("center scroll tıklandı.");
  };
  const scrollToQuestions = () => {
    questionsRef.current?.scrollIntoView({ behavior: "smooth" });
    console.log("questions tıklandı.", questionsRef.current);
  };
  return (
    <div className="w-full flex flex-col items-center text-gray-800">
      <HomeHero
        scrollToCallCenter={scrollToCallCenter}
        scrollToQuestions={scrollToQuestions}
      />
      <CallCenter ref={callCenterRef} />
      <Questions ref={questionsRef} />
    </div>
  );
}
