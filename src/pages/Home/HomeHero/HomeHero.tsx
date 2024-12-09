import { TbMessageQuestion } from "react-icons/tb";
import { FaPhoneVolume } from "react-icons/fa6";
import { HomeHeroProps } from "./types";
import hemoHeroImage from "../../../assets/homepageheroimage.jpg";

console.log(hemoHeroImage);
export default function HomeHero({ ...props }: HomeHeroProps) {
  return (
    <div className="w-full min-h-screen grid grid-rows-3 bg-[url('/src/assets/homepageheroimage.jpg')] relative">
      <div className="lg:h-1/3 p-4 w-full lg:w-1/3 gap-2 bg-white bg-opacity-20 absolute top-3/4 z-10 rounded-full  left-1/2 transform -translate-x-1/2 -translate-y-1/2 grid grid-cols-2">
        <div
          onClick={props.scrollToCallCenter}
          className=" p-2 bg-sky-800 hover:bg-teal-600 rounded-full flex flex-col items-center justify-center"
        >
          <div className="w-full p-2 flex items-center justify-center lg:h-1/2">
            <FaPhoneVolume className="text-5xl lg:text-7xl text-gray-200" />
          </div>
          <div className="flex flex-col gap-2 p-4">
            <h1 className="font-semibold text-sm lg:text-xl text-gray-200 text-center">
              Call Center
            </h1>
          </div>
        </div>
        <div
          onClick={props.scrollToQuestions}
          className=" p-2 bg-sky-800 hover:bg-teal-600  rounded-full flex flex-col items-center justify-center"
        >
          <div className="w-full p-2 flex items-center justify-center lg:h-1/2">
            <TbMessageQuestion className="text-5xl lg:text-7xl text-gray-200" />
          </div>
          <div className="flex flex-col gap-2 p-4">
            <h1 className="font-semibold text-sm lg:text-xl text-gray-200 text-center">
              Most Popular Questions
            </h1>
          </div>
        </div>
      </div>
      <div className="row-span-2 flex items-center justify-center bg-opacity-50 bg-sky-800 relative">
        <div className="h-2/4">
          <h1 className="text-6xl text-gray-200">
            <span className="text-teal-500 font-bold">67 </span> Country,{" "}
            <span className="text-teal-500 font-bold">148 </span>
            Plant!
          </h1>
          <h1 className="text-gray-200 text-5xl">
            Here to help, Anytime, Anywhere...
          </h1>
          <h1 className="text-3xl text-gray-200 mt-4 text-center">
            You deserve better!
          </h1>
        </div>
      </div>
      <div className="row-span-1 bg-white opacity-50"></div>
    </div>
  );
}
