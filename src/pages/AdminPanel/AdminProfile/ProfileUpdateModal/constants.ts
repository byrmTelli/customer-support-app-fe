import * as yup from "yup";

export const ProfileUpdateFormSchema = yup.object({
  id: yup.number().notRequired(),
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
  adress: yup
    .string()
    .min(10, "Address must be at least 10 characters long.")
    .max(100, "Address must be at most 100 characters long.")
    .matches(
      /^[a-zA-Z0-9ğüşöçİĞÜŞÖÇ\s,.-]+$/,
      "Address must only contain valid characters (letters, numbers, spaces, commas, dots, and hyphens)."
    ),
  username: yup.string().required(),
  phone: yup
    .string()
    .matches(
      /^[1-9]\d{2}\s\d{3}\s\d{2}\s\d{2}$/,
      "Telefon numarası geçerli bir formatta olmalıdır (örn. 555 444 33 22)"
    ),
  image: yup
    .mixed<File | string>()
    .test(
      "fileTypeOrString",
      "Yalnızca jpeg veya png formatı kabul edilir",
      (value) => {
        if (typeof value === "string") return true;
        return (
          value && ["image/jpeg", "image/png"].includes((value as File).type)
        );
      }
    )
    .test("fileSize", "Resim boyutu 2 MB'den küçük olmalıdır", (value) => {
      if (typeof value === "string") return true;
      return value && (value as File).size <= 2 * 1024 * 1024;
    }),
});
