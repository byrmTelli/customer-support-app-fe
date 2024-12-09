import { HomeQuestionCardProps } from "./types";
import { PiSealQuestionLight } from "react-icons/pi";
export default function HomeQuestionCard({
  card,
  isOpen,
  onToggle,
}: HomeQuestionCardProps) {
  return (
    <div className="overflow-hidden border border-gray-300 rounded-md">
      <div
        className={`w-full ${isOpen ? "bg-teal-700" : "bg-sky-800"} p-4 cursor-pointer" onClick={onToggle}`}
        onClick={onToggle}
      >
        <h1 className="text-gray-200 font-semibold select-none flex items-center gap-4">
          <PiSealQuestionLight className="text-xl" />
          {card.title}
        </h1>
      </div>
      {isOpen && (
        <div className="p-2 transition-all duration-300 ease-in-out">
          <p>{card.content}</p>
        </div>
      )}
    </div>
  );
}
