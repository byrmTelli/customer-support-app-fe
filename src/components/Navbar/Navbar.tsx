import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { userLogout } from "../../store/slices/user/userSlice";
import { RoleViewModel } from "../../store/api/generated/generatedApiAuth";
import { FaPowerOff } from "react-icons/fa6";
import placeholder from "../../assets/placeholder.jpg";
import { MdAdminPanelSettings } from "react-icons/md";
import { Tooltip } from "../Tooltip";
import { FaHome } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { PiBookOpenTextFill } from "react-icons/pi";

export default function Navbar() {
  const user = useAppSelector((state) => state.user);

  const roleBasedProfileRoute = (role: RoleViewModel) => {
    switch (role.name) {
      case "Admin":
        return "/admin";
      case "Customer Support":
        return "/customer-support";
      default:
        return "customer";
    }
  };

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // Handlers
  const handleLogoutButtonClick = () => {
    dispatch(userLogout());
  };

  return (
    <div className="">
      <div className="py-1 px-4 bg-gray-200 flex items-center justify-between">
        <h1 className="text-xs">www.customersupportservice.com</h1>
        {user.isAuthenticated ? (
          <>
            <div className="flex p-1 gap-2 items-center justify-center order-3">
              <button
                className=" flex gap-2 px-2 items-center justify-center rounded-lg border hover:border-gray-400 p-1"
                onClick={handleLogoutButtonClick}
              >
                <FaPowerOff className="text-xs" />
              </button>
            </div>
          </>
        ) : (
          <div className="flex p-1 gap-2 items-center justify-center order-3">
            <button
              className=" flex gap-2 px-2 items-center justify-center rounded-lg"
              onClick={() => navigate("/login")}
            >
              <span className="text-xs font-semibold">Login</span>
            </button>
            <button
              className=" flex gap-2 px-2 items-center justify-center rounded-lg"
              onClick={() => navigate("/register")}
            >
              <span className="text-xs font-semibold">Register</span>
            </button>
          </div>
        )}
      </div>
      <div className="md:h-[90px] shadow flex flex-col gap-2 md:flex-row items-center justify-between p-4 bg-sky-800 text-gray-200">
        <div
          onClick={() => navigate("/")}
          className="cursor-pointer order-1 flex flex-col items-center"
        >
          <span className="text-xl font-bold">Customer Support Service</span>
        </div>
        <div className="flex gap-2 items-center order-3 md:order-2">
          {user.isAuthenticated ? (
            <ul className="flex gap-4">
              <li className="font-semibold hover:bg-white hover:text-sky-800 p-2 rounded-full">
                <Tooltip title="Home">
                  <Link to={"/"} className="flex items-center gap-2">
                    <FaHome className="text-2xl" />
                  </Link>
                </Tooltip>
              </li>
              <li className="font-semibold hover:bg-white hover:text-sky-800 p-2 rounded-full">
                <Tooltip title="Profile">
                  <Link
                    className="flex items-center justify-center"
                    to={`${user.role && roleBasedProfileRoute(user.role ?? {})}/profile`}
                  >
                    <ImProfile className="text-2xl" />
                  </Link>
                </Tooltip>
              </li>
              {user.role?.name == "Admin" && (
                <li className="font-semibold hover:bg-white hover:text-sky-800 p-2 rounded-full">
                  <Tooltip title="Admin Panel">
                    <Link
                      to={"/admin"}
                      className="flex items-center justify-center"
                    >
                      <MdAdminPanelSettings className="text-2xl" />
                    </Link>
                  </Tooltip>
                </li>
              )}
              {user.role?.name == "Customer" ||
                (user.role?.name == "Admin" && (
                  <li className="font-semibold hover:bg-white hover:text-sky-800 p-2 rounded-full">
                    <Tooltip title="Create New Ticket">
                      <Link
                        to={"/customer/ticket/create"}
                        className="flex items-center gap-1"
                      >
                        <PiBookOpenTextFill className="text-2xl" />
                      </Link>
                    </Tooltip>
                  </li>
                ))}
            </ul>
          ) : (
            ""
          )}
        </div>
        {user.isAuthenticated ? (
          <div className="flex gap-4 items-center justify-center py-2 px-8 rounded-lg bg-sky-100 text-gray-800 order-2 md:order-3">
            <div className="text-gray-800 capitalize">
              <p className="text-sm font-semibold">{user.fullName}</p>
              <p className="text-xs font-semibold">{user.role?.name}</p>
            </div>
            <img
              src={user.profileImage != null ? user.profileImage : placeholder}
              className="size-[50px] rounded-full object-cover"
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
