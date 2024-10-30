import { useLocation } from "react-router-dom";
import { pages } from "../../App";
import { SiHomepage } from "react-icons/si";

export default function BreadCrum() {
  const location = useLocation();

  const currentPage = pages.find((page) => {
    const regex = new RegExp(`^${page.path.replace(/:\w+/g, "[^/]+")}$`);
    return regex.test(location.pathname);
  });

  const breaCrumbSegments = currentPage?.breadCrum.split("/");

  return (
    <div className="h-[80px] shadow w-full flex pl-10 gap-3 items-center text-gray-700 mb-4">
      <div className="flex gap-1 items-center">
        <SiHomepage className="" />
        {breaCrumbSegments?.map((segment, index) => (
          <span
            key={index}
            className="font-semibold capitalize flex items-center"
          >
            {segment}
            {index < breaCrumbSegments.length - 1 && (
              <span className="mx-1">{">"}</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
