import RegisterForm from "./RegisterForm/RegisterForm";

export default function Register() {
  return (
    <div className="w-full h-full flex  items-center justify-center">
      <div className=" md:w-3/4 border border-gray-400 rounded-lg shadow-lg p-4">
        <div className="md:h-1/3 gap-4 select-none text-center">
          <h1 className="font-semibold text-teal-700">
            Customer Support Service
          </h1>
          <h1 className="font-bold text-2xl">Register</h1>
        </div>
        <RegisterForm />
      </div>
    </div>
  );
}
