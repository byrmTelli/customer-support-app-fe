import * as yup from "yup";

export const loginFormDefaults = {
  username: "",
  password: "",
};

export const loginFormSchema = yup.object().shape({
  username: yup.string().required("Username field required."),
  password: yup
    .string()
    .min(6, "Password length must be at least 6 character.")
    .required("Password field required."),
});
