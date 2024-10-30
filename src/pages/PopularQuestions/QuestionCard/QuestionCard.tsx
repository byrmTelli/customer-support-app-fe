import { QuestionCardProps } from "./types";
import { FaQuestion } from "react-icons/fa";

export default function QuestionCard({ data }: QuestionCardProps) {
  return (
    <div className="w-full h-[400px]">
      <div
        className={`p-3 flex justify-between 
           bg-teal-700 text-gray-200 rounded-t-3xl  cursor-pointer select-none`}
      >
        <div className="flex gap-2 items-center">
          <div className="p-2 border  rounded-full">
            <FaQuestion className="text-gray-200 text-xl" />
          </div>
          <h1 className="text-lg font-semibold">{data.title}</h1>
        </div>
      </div>
      <div
        className={`bg-gray-200 bg-opacity-80 duration-300 ease-in-out overflow-y-auto p-4 h-2/3 rounded-b-3xl`}
      >
        {data.content}
      </div>
    </div>
  );
}
