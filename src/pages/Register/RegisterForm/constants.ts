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
  privacyPolicy: false,
};

export const registerUserFormSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username length must be between 3 - 30 character.")
    .max(30, "Username length must be between 3 - 30 character.")
    .required("Username field is required."),
  name: yup
    .string()
    .required("Name field is required.")
    .min(3, "Name field must be minimum 3 characters.")
    .max(21, "Name field must be maximum 21 characters.")
    .matches(
      /^[a-zA-ZğüşöçİĞÜŞÖÇ\s]+$/,
      "Name field must only contain letters (no numbers or special characters)."
    ),
  surname: yup
    .string()
    .required("Soyisim gereklidir")
    .min(2, "Name field must be minimum 2 characters.")
    .max(21, "Name field must be maximum 21 characters.")
    .matches(
      /^[a-zA-ZğüşöçİĞÜŞÖÇ\s]+$/,
      "Name field must only contain letters (no numbers or special characters)."
    ),
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
  phoneNumber: yup
    .string()
    .required()
    .matches(
      /^[1-9]\d{2}\s\d{3}\s\d{2}\s\d{2}$/,
      "Telefon numarası geçerli bir formatta olmalıdır (örn. 555 444 33 22)"
    ),
  adress: yup
    .string()
    .required()
    .min(10, "Address must be at least 10 characters long.")
    .max(100, "Address must be at most 100 characters long.")
    .matches(
      /^[a-zA-Z0-9ğüşöçİĞÜŞÖÇ\s,.-]+$/,
      "Address must only contain valid characters (letters, numbers, spaces, commas, dots, and hyphens)."
    ),
  privacyPolicy: yup
    .boolean()
    .oneOf([true], "You must accept the privacy policy.")
    .required("You must accept the privacy policy."),
});

export type registerUserFormModel = typeof registerUserFormDefaults;
