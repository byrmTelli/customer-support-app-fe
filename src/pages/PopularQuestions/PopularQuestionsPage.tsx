import { useState } from "react";
import QuestionCard from "./QuestionCard/QuestionCard";
import { popularQuestions } from "./QuestionCard/constants";
import BreadCrum from "../../components/BreadCrum/BreadCrum";

export default function PopularQuestionsPage() {
  const [openCard, setOpenCard] = useState<number | null>(0);

  const handleCardClick = (index: number) => {
    setOpenCard(openCard === index ? null : index);
  };

  return (
    <div className="w-full h-full">
      <BreadCrum />
      <div className="w-full flex items-center justify-center py-4">
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
    </div>
  );
}
