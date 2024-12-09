import React, { useState, forwardRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { popularQuestions } from "../../PopularQuestions/QuestionCard/constants";
import HomeQuestionCard from "../HomeQuestionCard/HomeQuestionCard";

const Questions = forwardRef<HTMLDivElement>((props, ref) => {
  // States
  const [openCard, setOpenCard] = useState<number | null>(null);

  // Handlers
  const toggleCard = (key: number) => {
    setOpenCard((prevOpenCard) => (prevOpenCard === key ? null : key));
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center gap-4 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/src/assets/mostpopularquestions.jpg')] bg-no-repeat bg-cover bg-center bg-fixed -z-10"></div>
      <div
        ref={ref}
        className="w-full h-full bg-sky-800 bg-opacity-50 flex flex-col items-center justify-center p-4 gap-2"
      >
        <h1 className="text-gray-200 font-semibold text-4xl p-4">
          Popular Questions
        </h1>
        <div className="w-full h-full flex items-start justify-center">
          <div className="w-4/5 h-full bg-white p-4 rounded-lg bg-opacity-70">
            {popularQuestions.map((item, key) => (
              <HomeQuestionCard
                key={key}
                card={item}
                isOpen={openCard === key}
                onToggle={() => toggleCard(key)}
              />
            ))}
            <div className="w-full p-4">
              <h1 className="font-semibold text-lg border-b border-sky-800">
                More Information
              </h1>
              <p className="pt-4">
                If you need more information, feel free to contact with us.
              </p>
            </div>
            <div className="flex w-full justify-end p-4 text-sm">
              <p className="text-center italic font-semibold pr-8">
                Customer Service Team
                <br />
                You Deserve Better...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Questions;
