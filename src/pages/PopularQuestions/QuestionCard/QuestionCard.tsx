import { IoIosArrowDown } from "react-icons/io";
import { QuestionCardProps } from "./types";
import { FaQuestion } from "react-icons/fa";

interface Props extends QuestionCardProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function QuestionCard({ isOpen, onClick, data }: Props) {
  return (
    <div className="w-full border border-teal-700">
      <div
        onClick={onClick}
        className={`p-3  flex justify-between ${
          isOpen ? "bg-teal-700 text-gray-200" : ""
        } cursor-pointer select-none`}
      >
        <div className="flex gap-2 items-center">
          <div className="p-2 border border-teal-700 rounded-full">
            <FaQuestion className="text-teal-700 text-xl" />
          </div>
          <h1 className="text-lg font-semibold">{data.title}</h1>
        </div>
        <IoIosArrowDown
          className={`text-lg transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } ease-in-out duration-300 transition-all p-3`}
      >
        {data.content}
      </div>
    </div>
  );
}
