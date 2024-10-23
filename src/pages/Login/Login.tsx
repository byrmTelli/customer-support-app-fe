import { FaRegCircleUser } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { apiAuth } from "../../store/api/enhances/enhancedApiAuth";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginFormDefaults, loginFormSchema } from "./constants";
import { useEvent } from "react-use-event-hook";
import useSetSafeTimeout from "use-set-safe-timeout";
import useAuthenticationControl from "../../hooks/useAuthenticationControl";
import { FormEventHandler } from "react";

export default function Login() {
  // States
  const navigate = useNavigate();

  // Hooks
  const setSafeTimeout = useSetSafeTimeout();
  const authenticationControl = useAuthenticationControl();

  // Queries
  const [login] = apiAuth.usePostApiAuthLoginMutation();

  // Form
  const form = useForm({
    defaultValues: loginFormDefaults,
    resolver: yupResolver(loginFormSchema),
  });

  // Handlers
  const handleLoginButtonClick = useEvent(() => {
    const f = form.getValues();
    const { username, password } = f;

    login({
      userLoginRequestModel: {
        username,
        password,
      },
    })
      .unwrap()
      .then((result) => {
        const authData = result.data;

        if (
          authData?.token == undefined ||
          typeof authData.token !== "string"
        ) {
          return;
        }

        const token = authData.token ?? "";

        authenticationControl.login({ token });

        setSafeTimeout(() => {
          navigate("/");
        }, 500);
      });
  });

  const handleFormSubmit = useEvent<FormEventHandler<HTMLFormElement>>((e) => {
    e.preventDefault();
    handleLoginButtonClick();
  });

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="size-96 border border-gray-400 rounded-lg shadow-lg p-4">
        <div className="h-1/3 flex flex-col items-center justify-center select-none">
          <h1 className="font-semibold text-teal-700">
            Customer Support Service
          </h1>
          <h1 className="font-bold text-2xl">Login Panel</h1>
        </div>
        <form onSubmit={handleFormSubmit}>
          <div className="flex flex-col items-center justify-center gap-2 ">
            <div className="border border-gray-400 rounded-lg p-2 flex gap-2 items-center text-gray-800 w-3/4 focus-within:border-teal-700 focus-within:text-teal-700">
              <FaRegCircleUser />

              <Controller
                name="username"
                control={form.control}
                render={({ field }) => (
                  <input
                    {...field}
                    placeholder="Username"
                    className="w-full outline-none"
                    autoComplete="off"
                    spellCheck="false"
                    tabIndex={1}
                  />
                )}
              />
            </div>
            <div className="border border-gray-400 rounded-lg p-2 flex gap-2 items-center text-gray-800 w-3/4 focus-within:border-teal-700 focus-within:text-teal-700">
              <FaRegCircleUser className="" />
              <Controller
                name="password"
                control={form.control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="password"
                    placeholder="Password"
                    className="w-full outline-none"
                    autoComplete="off"
                    tabIndex={2}
                  />
                )}
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
            <div className="text-xs flex flex-row-reverse justify-between gap-2 w-3/4">
              <button
                tabIndex={3}
                onClick={form.handleSubmit(handleLoginButtonClick)}
                className="border border-teal-700 py-1 px-4 rounded-lg hover:bg-teal-600 hover:border-teal-600 bg-teal-700 font-semibold text-gray-200 w-[7rem] h-[2.3rem]"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/register")}
                className="border border-teal-700 py-1 px-4 rounded-lg hover:bg-teal-600 hover:border-teal-600 bg-teal-700 font-semibold text-gray-200 w-[7rem] h-[2.3rem]"
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
