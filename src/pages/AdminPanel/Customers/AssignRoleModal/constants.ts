import * as yup from "yup";

export const AssignRoleFormSchema = yup.object({
  userId: yup.number().required(),
  roleId: yup
    .object({
      id: yup.number().required("Role ID is required"),
      name: yup.string(),
    })
    .required(),
});
