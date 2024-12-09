import { useNavigate } from "react-router-dom";
import { CallCenterSectionCardProps } from "./types";
import { HiOutlineCursorClick } from "react-icons/hi";
import { useAppSelector } from "../../../../store/hooks";

export default function CallCenterSectionCard({
  item,
}: CallCenterSectionCardProps) {
  // States
  const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);
  const navigate = useNavigate();

  return (
    <div className="h-full grid md:grid-cols-2 justify-center place-items-center p-4">
      <div className="p-4 flex flex-col text-gray-200 gap-4 w-3/4 order-2 md:order-1">
        <h1 className="font-semibold text-2xl text-center">{item.title}</h1>
        <p className="text-justify">{item.content}</p>
        <div className="w-full p-2 flex items-center justify-center">
          <button
            onClick={() =>
              isAuthenticated ? navigate(item.path) : navigate("login")
            }
            className="p-2 bg-gray-200 text-sky-800 w-[10rem] hover:bg-sky-800 hover:text-gray-200 hover:border-gray-200 font-semibold border border-sky-800 g flex items-center justify-center gap-2"
          >
            <HiOutlineCursorClick className="text-2xl" />
            <span>Click Here</span>
          </button>
        </div>
      </div>
      <div className="rounded-lg p-4 h-full flex items-center justify-center w-full size-[300px] md:size-[450px] lg:size-[500px] order-1 md:order-2">
        <img
          className="rounded-full size-[300px] md:size-[450px] lg:size-[500px] object-cover p-4"
          src={item.image}
          alt=""
        />
      </div>
    </div>
  );
}
