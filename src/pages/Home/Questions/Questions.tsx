import { popularQuestions } from "../../PopularQuestions/QuestionCard/constants";
import QuestionCard from "../../PopularQuestions/QuestionCard/QuestionCard";
import { useState } from "react";

export default function Questions() {
  const [openCard, setOpenCard] = useState<number | null>(0);

  const handleCardClick = (index: number) => {
    setOpenCard(openCard === index ? null : index);
  };
  return (
    <div className="w-full flex flex-col items-center justify-center py-4 gap-4">
      <h1 className="text-teal-700 font-semibold text-2xl">
        Popular Questions
      </h1>
      <div className="lg:w-3/5 flex flex-col py-4">
        {popularQuestions.map((question, index) => (
          <QuestionCard
            key={index}
            isOpen={openCard === index}
            onClick={() => handleCardClick(index)}
            data={question}
          />
        ))}
      </div>
    </div>
  );
}
