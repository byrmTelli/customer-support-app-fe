import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const navigate = useNavigate();

  return (
    <div className="md:h-[90px] shadow flex items-center justify-between p-4 bg-teal-700 border-b border-gray-200 text-gray-200 mb-4">
      <div onClick={() => navigate("/")} className="cursor-pointer">
        <span className="text-xl font-bold">Customer Support Service</span>
      </div>
      <div className="flex gap-2 items-center">
        <ul className="flex gap-2">
          <li
            className={`${
              location.pathname == "/"
                ? " border border-teal-700 border-b-gray-200"
                : ""
            } font-semibold`}
          >
            <Link to={"/"}>Home</Link>
          </li>
          <li className="font-semibold">
            <Link to={"/support"}>Support</Link>
          </li>
          <li className="font-semibold">
            <Link to={"/admin"}>Admin</Link>
          </li>
        </ul>
      </div>
      <div className="flex gap-2 items-center justify-center py-2 px-4">
        <div className="">
          <p className="text-sm font-semibold">Bayram Telli</p>
          <p className="text-xs font-semibold">Customer</p>
        </div>
        <img
          src="https://www.strasys.uk/wp-content/uploads/2022/02/Depositphotos_484354208_S.jpg"
          alt=""
          className="size-[50px] rounded-full"
        />
      </div>
    </div>
  );
}
