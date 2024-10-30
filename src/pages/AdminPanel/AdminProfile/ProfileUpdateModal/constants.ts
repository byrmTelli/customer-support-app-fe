import * as yup from "yup";

export const ProfileUpdateFormSchema = yup.object({
  id: yup.number().notRequired(),
  name: yup.string().required("İsim gereklidir"),
  surname: yup.string().required("Soyisim gereklidir"),
  adress: yup.string(),
  username: yup.string().required(),
  phone: yup.string(),
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
