import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { userLogout } from "../../store/slices/user/userSlice";
import { RiLogoutCircleLine, RiLoginCircleLine } from "react-icons/ri";

export default function Navbar() {
  const location = useLocation();
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  console.log(user);
  // Handlers
  const handleLogoutButtonClick = () => {
    dispatch(userLogout());
  };

  return (
    <div className="md:h-[90px] shadow flex flex-col gap-2 md:flex-row items-center justify-between p-4 bg-teal-700 border-b border-gray-200 text-gray-200 mb-4">
      <div onClick={() => navigate("/")} className="cursor-pointer order-1">
        <span className="text-xl font-bold">Customer Support Service</span>
      </div>
      <div className="flex gap-2 items-center order-3 md:order-2">
        {user.isAuthenticated ? (
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
              <Link to={`/profile/${user.id}`}>Profile</Link>
            </li>
            {user.role?.name == "Admin" && (
              <li className="font-semibold">
                <Link to={"/admin"}>Admin Panel</Link>
              </li>
            )}
          </ul>
        ) : (
          ""
        )}
      </div>
      {user.isAuthenticated ? (
        <div className="flex gap-4 items-center justify-center py-2 px-4 bg-gray-200 text-gray-800 rounded-3xl order-2 md:order-3">
          <div className="flex p-2 items-center">
            <button onClick={handleLogoutButtonClick}>
              <RiLogoutCircleLine className="text-xl" />
            </button>
          </div>
          <div className="">
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
        <div className="flex p-2 gap-2 items-center justify-center order-3">
          <button
            className=" flex gap-2 py-1 px-2 items-center justify-center rounded-lg hover:bg-teal-600 transition-colors duration-300"
            onClick={() => navigate("/login")}
          >
            <RiLoginCircleLine className="text-xl" />
            <span className="font-semibold">Login</span>
          </button>
        </div>
      )}
    </div>
  );
}
