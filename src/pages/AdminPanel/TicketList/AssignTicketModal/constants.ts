import { HelpdeskViewModel } from "../../../../store/api/generated/generatedApiUser";
import * as yup from "yup";
export const AssignToHelpdeskFormDefaults = {
  helpdesk: null as HelpdeskViewModel | null,
  userId: 0,
};

export const AssigntoHelpdeskFormSchema = yup.object().shape({
  helpdesk: yup.object().required().nullable(),
  userId: yup.number().required("User ID is required"),
});

export type AssignTicketToHelpdeskFormModel =
  typeof AssignToHelpdeskFormDefaults;
