import { FaRegCircleUser } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="size-96 border border-gray-400 rounded-lg shadow-lg p-4">
        <div className="h-1/3 flex flex-col items-center justify-center select-none">
          <h1 className="font-semibold text-teal-700">
            Customer Support Service
          </h1>
          <h1 className="font-bold text-2xl">Login Panel</h1>
        </div>
        <form action="" className="">
          <div className="flex flex-col items-center justify-center gap-2 ">
            <div className="border border-gray-400 rounded-lg p-2 flex gap-2 items-center text-gray-800 w-3/4 focus-within:border-teal-700 focus-within:text-teal-700">
              <FaRegCircleUser />
              <input
                type="text"
                placeholder="Username"
                className="w-full outline-none"
                autoComplete="off"
                spellCheck="false"
              />
            </div>
            <div className="border border-gray-400 rounded-lg p-2 flex gap-2 items-center text-gray-800 w-3/4 focus-within:border-teal-700 focus-within:text-teal-700">
              <FaRegCircleUser className="" />
              <input
                type="password"
                placeholder="Password"
                className="w-full outline-none"
                autoComplete="off"
              />
            </div>
            <div className="flex text-xs items-center gap-2 justify-between w-3/4 px-2">
              <span
                onClick={() => navigate("/forget-password")}
                className="cursor-pointer font-semibold hover:text-teal-600"
              >
                Forget Password
              </span>
              <div className="flex items-center gap-2">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Remember Me</label>
              </div>
            </div>
            <div className="text-xs flex justify-between gap-2 w-3/4">
              <button
                onClick={() => navigate("/register")}
                className="border border-teal-700 py-1 px-4 rounded-lg hover:bg-teal-600 hover:border-teal-600 bg-teal-700 font-semibold text-gray-200 w-[7rem] h-[2.3rem]"
              >
                Register
              </button>
              <button className="border border-teal-700 py-1 px-4 rounded-lg hover:bg-teal-600 hover:border-teal-600 bg-teal-700 font-semibold text-gray-200 w-[7rem] h-[2.3rem]">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
