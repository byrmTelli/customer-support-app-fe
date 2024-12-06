import * as yup from "yup";

export const ProfileUpdateFormSchema = yup.object({
  id: yup.number().notRequired(),
  name: yup.string().required("İsim gereklidir"),
  surname: yup.string().required("Soyisim gereklidir"),
  adress: yup.string(),
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
