import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className="md:h-[90px] flex items-center justify-between p-4">
      <div className="">
        <span className="text-xl font-bold">Customer Support Service</span>
      </div>
      <div className="flex gap-2 items-center">
        <ul className="flex gap-2">
          <li
            className={`${
              location.pathname == "/" ? "border border-b-teal-700" : ""
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
          <p className="text-xs font-semibold text-gray-800">Customer</p>
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
