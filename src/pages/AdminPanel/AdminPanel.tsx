import { MdOutlineSpaceDashboard } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FaUsersViewfinder } from "react-icons/fa6";
import BreadCrum from "../../components/BreadCrum/BreadCrum";
import { FaHandsHelping } from "react-icons/fa";
import { TbCategoryPlus } from "react-icons/tb";
import { IoStatsChart } from "react-icons/io5";
import { MdErrorOutline } from "react-icons/md";
import { BsEnvelopeDashFill } from "react-icons/bs";

export default function AdminPanel() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full flex flex-col">
      <BreadCrum />
      <div className="w-full h-full grid md:grid-cols-4 md:grid-rows-4 p-2 gap-2">
        <div
          onClick={() => navigate("/admin/dashboard")}
          className="w-full h-[7rem] md:h-full col-span-2 row-span-4 bg-sky-800 text-gray-200 text-8xl rounded-lg flex flex-col items-center justify-center hover:bg-gradient-to-t hover:from-sky-800 hover:to-teal-600 transition-all duration-500"
        >
          <MdOutlineSpaceDashboard className="text-4xl lg:text-6xl" />

          <h1 className="text-xl">Dashboard</h1>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 row-span-2 gap-2">
          <div
            onClick={() => navigate("/admin/categories/1")}
            className="rounded-lg p-4 flex flex-col items-center justify-center bg-sky-800  text-gray-200 font-semibold hover:bg-gradient-to-t hover:from-sky-800 hover:to-teal-600 transition-all duration-500"
          >
            <TbCategoryPlus className="text-2xl lg:text-5xl" />
            <h1 className="text-sm lg:text-lg">Categories</h1>
          </div>
          <div className="rounded-lg flex flex-col items-center justify-center bg-sky-800  text-gray-200 font-semibold hover:bg-gradient-to-t hover:from-sky-800 hover:to-teal-600 transition-all duration-500">
            <MdErrorOutline className="text-2xl lg:text-5xl" />
            <h1 className="text-sm lg:text-lg">Logs</h1>
          </div>
          <div
            onClick={() => navigate("/admin/tickets")}
            className="rounded-lg flex flex-col items-center justify-center bg-sky-800  text-gray-200 font-semibold hover:bg-gradient-to-t hover:from-sky-800 hover:to-teal-600 transition-all duration-500"
          >
            <IoStatsChart className="text-2xl lg:text-5xl" />
            <h1 className="text-sm lg:text-lg">Tickets</h1>
          </div>
          <div
            onClick={() => navigate("/admin/notifications")}
            className="rounded-lg flex flex-col items-center justify-center bg-sky-800  text-gray-200 font-semibold hover:bg-gradient-to-t hover:from-sky-800 hover:to-teal-600 transition-all duration-500"
          >
            <BsEnvelopeDashFill className="text-2xl lg:text-5xl" />
            <h1 className="text-sm sm:text-base lg:text-lg">Notifications</h1>
          </div>
        </div>
        <div
          onClick={() => navigate("/admin/users")}
          className="row-span-2 rounded-lg  flex flex-col items-center justify-center text-8xl  bg-sky-800  text-gray-200 font-semibold hover:bg-gradient-to-t hover:from-sky-800 hover:to-teal-600 transition-all duration-500"
        >
          <FaUsersViewfinder className="text-4xl lg:text-5xl" />
          <h1 className="text-sm lg:text-xl">Users</h1>
        </div>
        <div className="row-span-2 col-span-2">
          <div
            onClick={() => navigate("/admin/customers")}
            className="w-full md:h-full flex py-4 flex-col items-center justify-center bg-sky-800  rounded-lg text-gray-200 font-semibold hover:bg-gradient-to-t hover:from-sky-800 hover:to-teal-600 transition-all duration-500"
          >
            <FaHandsHelping className="text-4xl lg:text-5xl" />
            <h1 className="text-sm lg:text-lg">Customers</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
