import * as yup from "yup";

export const registerUserFormDefaults = {
  username: "",
  name: "",
  surname: "",
  email: "",
  password: "",
  passwordConfirm: "",
  phoneNumber: "",
  adress: "",
};

export const registerUserFormSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username length must be between 3 - 30 character.")
    .max(30, "Username length must be between 3 - 30 character.")
    .required("Username field is required."),
  name: yup
    .string()
    .min(3, "Username length must be between 3 - 30 character.")
    .max(30, "Username length must be between 3 - 30 character.")
    .required("Username field is required."),
  surname: yup
    .string()
    .min(3, "Username length must be between 3 - 30 character.")
    .max(30, "Username length must be between 3 - 30 character.")
    .required("Username field is required."),
  email: yup
    .string()
    .email("Invalid email schema")
    .required("Email field is required."),
  password: yup
    .string()
    .min(6, "Password length must be between 6 - 50 character.")
    .max(50, "Password length must be between 6 - 50 character.")
    .required("Password field is required."),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Passwords did not match.")
    .required("Password confirm field is required."),
  phoneNumber: yup.string().nullable().required(),
  adress: yup
    .string()
    .min(5, "Adress field's length must be between 5 - 50 character.")
    .max(50, "Adress field's length must be between 5 - 50 character.")
    .nullable()
    .required(),
});

export type registerUserFormModel = typeof registerUserFormDefaults;
