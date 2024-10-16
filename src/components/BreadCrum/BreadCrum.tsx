import { useLocation } from "react-router-dom";
import { pages } from "../../App";
import { SiHomepage } from "react-icons/si";

export default function BreadCrum() {
  const location = useLocation();

  const currentPage = pages.find((page) => page.path === location.pathname);

  const pathSlices = currentPage?.breadCrum
    .split("/")
    .map((slice) => slice.replace("-", " "));

  return (
    <div className="h-[80px] shadow  w-full flex pl-10 gap-3 items-center text-gray-700">
      <h1 className="text-lg font-semibold">{currentPage?.title}</h1>
      <div className="flex gap-1 items-center">
        <SiHomepage className="" />
        {pathSlices?.map((item, index) => (
          <span key={index} className="capitalize flex items-center">
            {item}
            {index != 0 && index < pathSlices.length - 1 && (
              <span className="mx-1">{">"}</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
