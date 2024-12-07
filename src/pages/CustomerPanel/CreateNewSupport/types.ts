import * as yup from "yup";
import { CategoryViewModel } from "../../../store/api/generated/generatedApiCategory";

export const CreateNewSupportFormDefaults = {
  id: 0,
  title: "",
  content: "",
  category: {} as CategoryViewModel,
  creatorId: 0,
  files: [] as File[],
};

export const CreateNewSupportFormSchema = yup.object().shape({
  id: yup.number().required("id field is required."),
  title: yup
    .string()
    .required("Title field is required.")
    .matches(/^[a-zA-Z\s]+$/, "Title can only contain letters and spaces")
    .min(3, "Title must be at least 3 characters")
    .max(50, "Title must be at most 50 characters"),
  content: yup
    .string()
    .required("Content field is required.")
    .matches(/^[a-zA-Z\s]+$/, "Title can only contain letters and spaces")
    .min(3, "Content must be at least 3 characters")
    .max(300, "Content must be at most 50 characters"),
  category: yup
    .object()
    .required("Category field is required.")
    .test(
      "is-not-empty",
      "Category cannot be empty.",
      (value) => value && Object.keys(value).length > 0
    ),
  creatorId: yup.number().required("creator must be specified."),
  files: yup
    .array()
    .of(
      yup
        .mixed<File>()
        .required("A file is required")
        .test("fileType", "Only .jpg, .png, .pdf files are allowed", (file) => {
          return (
            file &&
            ["image/jpeg", "image/png", "application/pdf"].includes(file.type)
          );
        })
    )
    .required("Files are required.")
    .min(0, "At least one file is required"),
});

export type CreateNewSupportFormModel = typeof CreateNewSupportFormDefaults;
