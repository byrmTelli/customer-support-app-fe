import { forwardRef } from "react";
import callCenterImage from "../../../assets/callcenter.jpg";
const CallCenter = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      ref={ref}
      className="h-screen bg-sky-800 w-full flex flex-col items-center gap-4 p-4"
      id="call-center"
    >
      <div className="p-4">
        <h1 className="text-4xl text-gray-200 font-semibold">Services</h1>
      </div>
      <div className="md:w-4/5 lg:w-3/5 h-full grid md:grid-cols-2 justify-center items-center">
        <div className="p-4 flex flex-col text-gray-200 gap-4 order-2 md:order-1">
          <h1 className="font-semibold text-2xl text-center">
            Call Center 7/24
          </h1>
          <p className="text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            atque aut dolore excepturi modi laboriosam reiciendis, similique
            quasi voluptate, error laborum. Unde similique autem impedit ea!
            Dolorum reiciendis tenetur odio architecto nulla?
          </p>
          <div className="w-full p-2 flex items-center justify-center">
            <button className="p-2 bg-gray-200 text-sky-800 w-[10rem] hover:bg-sky-800 hover:text-gray-200 hover:border-gray-200 font-semibold border border-sky-800 g">
              Call Center
            </button>
          </div>
        </div>
        <div className="rounded-lg p-4 h-full flex items-center justify-center w-full size-[300px] md:size-[450px] lg:size-[500px] order-1 md:order-2">
          <img
            className="rounded-full size-[300px] md:size-[450px] lg:size-[500px] object-cover p-4"
            src={callCenterImage}
            alt=""
          />
        </div>
      </div>
    </div>
  );
});

export default CallCenter;
