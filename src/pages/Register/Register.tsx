import { FaRegCircleUser } from "react-icons/fa6";

export default function Register() {
  return (
    <div className="w-full h-screen flex  pt-10 justify-center">
      <div className="h-full w-full md:h-3/4 md:w-2/3 border border-gray-400 rounded-lg shadow-lg p-4">
        <div className="h-1/3 flex flex-col items-center justify-center select-none">
          <h1 className="font-semibold text-teal-700">
            Customer Support Service
          </h1>
          <h1 className="font-bold text-2xl">Register</h1>
        </div>
        <form
          action=""
          className="flex flex-col md:flex-row gap-2 w-full items-start justify-center"
        >
          <div className="flex flex-col gap-2 w-full items-center justify-center">
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
              <FaRegCircleUser />
              <input
                type="text"
                placeholder="Email"
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
            <div className="border border-gray-400 rounded-lg p-2 flex gap-2 items-center text-gray-800 w-3/4 focus-within:border-teal-700 focus-within:text-teal-700">
              <FaRegCircleUser className="" />
              <input
                type="password"
                placeholder="Password Confirm"
                className="w-full outline-none"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full items-center justify-center">
            <div className="border border-gray-400 rounded-lg p-2 flex gap-2 items-center text-gray-800 w-3/4 focus-within:border-teal-700 focus-within:text-teal-700">
              <FaRegCircleUser />
              <input
                type="text"
                placeholder="Name"
                className="w-full outline-none"
                autoComplete="off"
                spellCheck="false"
              />
            </div>
            <div className="border border-gray-400 rounded-lg p-2 flex gap-2 items-center text-gray-800 w-3/4 focus-within:border-teal-700 focus-within:text-teal-700">
              <FaRegCircleUser />
              <input
                type="text"
                placeholder="Surname"
                className="w-full outline-none"
                autoComplete="off"
                spellCheck="false"
              />
            </div>
            <div className="border border-gray-400 rounded-lg p-2 flex gap-2 items-center text-gray-800 w-3/4 focus-within:border-teal-700 focus-within:text-teal-700">
              <FaRegCircleUser className="" />
              <input
                type="password"
                placeholder="Phone"
                className="w-full outline-none"
                autoComplete="off"
              />
            </div>
            <div className="border border-gray-400 rounded-lg p-2 flex gap-2 items-center text-gray-800 w-3/4 focus-within:border-teal-700 focus-within:text-teal-700">
              <FaRegCircleUser className="" />
              <input
                type="password"
                placeholder="Password Confirm"
                className="w-full outline-none"
                autoComplete="off"
              />
            </div>
            <div className="w-3/4 flex gap-2 justify-between text-xs">
              <div className="flex items-center gap-1">
                <input type="checkbox" name="" id="" />
                <button>Privacy Policy</button>
              </div>
              <button className="border border-teal-700 py-1 px-4 rounded-lg hover:bg-teal-600 hover:border-teal-600 bg-teal-700 font-semibold text-gray-200 w-[7rem] h-[2.3rem]">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
