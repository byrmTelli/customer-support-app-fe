import { Controller, useForm } from "react-hook-form";
import { Input } from "../../../components/Input";
import {
  registerUserFormDefaults,
  registerUserFormModel,
  registerUserFormSchema,
} from "./constants";
import { yupResolver } from "@hookform/resolvers/yup";
import { apiUser } from "../../../store/api/enhances/enhancedApiUser";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function RegisterForm() {
  // States
  const navigate = useNavigate();
  // Queries
  const [registerUser] = apiUser.usePostApiUserRegisterMutation();
  // Form
  const form = useForm<registerUserFormModel>({
    defaultValues: registerUserFormDefaults,
    resolver: yupResolver(registerUserFormSchema),
  });
  // Handlers
  const handleRegisterButtonClick = () => {
    const f = form.getValues();

    registerUser({
      registerUserRequestModel: {
        username: f.username,
        name: f.name,
        surname: f.surname,
        email: f.email,
        phoneNumber: f.phoneNumber,
        password: f.password,
        passwordConfirm: f.passwordConfirm,
        address: f.adress,
      },
    })
      .unwrap()
      .then((res) => {
        if (res.success) {
          navigate("/");
          toast.success(`Message: ${res.message}`);
        }
      })
      .catch((err) => {
        toast.error(`Message ${err.message}`);
      });
  };
  return (
    <form
      onSubmit={form.handleSubmit(handleRegisterButtonClick)}
      className="grid sm:grid-cols-2 gap-2 md:gap-4 w-full h-full pt-4"
    >
      <div className="">
        <Controller
          name={"username"}
          control={form.control}
          render={({ field, fieldState }) => (
            <Input
              {...field}
              autoComplete="off"
              invalid={fieldState.error?.message}
              label="Username"
            />
          )}
        />
      </div>
      <div className="">
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Input
              {...field}
              autoComplete="off"
              invalid={fieldState.error?.message}
              label="Name"
            />
          )}
        />
      </div>
      <div className="">
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Input
              {...field}
              autoComplete="off"
              invalid={fieldState.error?.message}
              label="Email"
            />
          )}
        />
      </div>
      <div className="">
        <Controller
          name="surname"
          control={form.control}
          render={({ field, fieldState }) => (
            <Input
              {...field}
              autoComplete="off"
              invalid={fieldState.error?.message}
              label="Surname"
            />
          )}
        />
      </div>
      <div className="">
        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Input
              {...field}
              autoComplete="off"
              type="password"
              invalid={fieldState.error?.message}
              label="Password"
            />
          )}
        />
      </div>
      <div className="">
        <Controller
          name="phoneNumber"
          control={form.control}
          render={({ field, fieldState }) => (
            <Input
              {...field}
              autoComplete="off"
              invalid={fieldState.error?.message}
              label="Phone"
            />
          )}
        />
      </div>
      <div className="">
        <Controller
          name="passwordConfirm"
          control={form.control}
          render={({ field, fieldState }) => (
            <Input
              {...field}
              autoComplete="off"
              type="password"
              invalid={fieldState.error?.message}
              label="Password Confirm"
            />
          )}
        />
      </div>
      <div className="">
        <Controller
          name="adress"
          control={form.control}
          render={({ field, fieldState }) => (
            <Input
              {...field}
              autoComplete="off"
              invalid={fieldState.error?.message}
              label="Adress"
            />
          )}
        />
      </div>

      <div className="w-full sm:col-start-2 flex gap-2 justify-between text-xs">
        <div className="flex items-center gap-1">
          <input type="checkbox" name="" id="" />
          <p>Privacy Policy</p>
        </div>
        <button className="border border-teal-700 py-1 px-4 rounded-lg hover:bg-teal-600 hover:border-teal-600 bg-teal-700 font-semibold text-gray-200 w-[7rem] h-[2.3rem]">
          Submit
        </button>
      </div>
    </form>
  );
}
