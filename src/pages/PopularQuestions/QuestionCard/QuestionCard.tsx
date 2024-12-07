import { QuestionCardProps } from "./types";
import { FaQuestion } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";

export default function QuestionCard({ data }: QuestionCardProps) {
  return (
    <div className="w-full grid grid-cols-3 size-[400px] mb-10">
      <div
        className={`flex bg-sky-800 text-gray-200  cursor-pointer select-none p-8 rounded-l-full`}
      >
        <div className="w-full flex flex-col justify-center gap-2 items-center">
          <div className="p-2 border  rounded-full">
            <FaQuestion className="text-gray-200 text-6xl" />
          </div>
          <h1 className="text-4xl font-semibold text-center">{data.title}</h1>
        </div>
      </div>
      <div
        className={`col-span-2 flex items-center justify-center bg-gray-200 text-gray-700 bg-opacity-80 duration-300 ease-in-out overflow-y-auto p-8 text-justify rounded-r-full`}
      >
        <div className="flex gap-4  w-full p-4 ">
          <div className="pt-1">
            <IoIosStar className="text-orange-400 text-3xl" />
          </div>
          <p className="text-2xl text-gray-800">{data.content}</p>
        </div>
      </div>
    </div>
  );
}
