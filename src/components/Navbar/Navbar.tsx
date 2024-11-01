import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { userLogout } from "../../store/slices/user/userSlice";
import { RoleViewModel } from "../../store/api/generated/generatedApiAuth";
import { FaPowerOff } from "react-icons/fa6";

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
      <div className="md:h-[90px] shadow flex flex-col gap-2 md:flex-row items-center justify-between p-4 bg-teal-700 text-gray-200">
        <div onClick={() => navigate("/")} className="cursor-pointer order-1">
          <span className="text-xl font-bold">CSS</span>
        </div>
        <div className="flex gap-2 items-center order-3 md:order-2">
          {user.isAuthenticated ? (
            <ul className="flex gap-2">
              <li className="font-semibold">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="font-semibold">
                <Link
                  to={`${user.role && roleBasedProfileRoute(user.role ?? {})}/profile`}
                >
                  Profile
                </Link>
              </li>
              {user.role?.name == "Admin" && (
                <li className="font-semibold">
                  <Link to={"/admin"}>Admin Panel</Link>
                </li>
              )}
              {user.role?.name == "Customer" && (
                <li className="font-semibold">
                  <Link to={"/customer/ticket/create"}>New Ticket</Link>
                </li>
              )}
            </ul>
          ) : (
            ""
          )}
        </div>
        {user.isAuthenticated ? (
          <div className="flex gap-4 items-center justify-center py-2 px-8 rounded-lg bg-teal-100 text-gray-800 order-2 md:order-3">
            <div className="text-gray-800">
              <p className="text-sm font-semibold">{user.fullName}</p>
              <p className="text-xs font-semibold">{user.role?.name}</p>
            </div>
            <img
              src={
                user.profileImage != null
                  ? user.profileImage
                  : "https://www.strasys.uk/wp-content/uploads/2022/02/Depositphotos_484354208_S.jpg"
              }
              alt=""
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
