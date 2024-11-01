import { TicketViewModel } from "../../../store/api/generated/generatedApiTicket";
import * as yup from "yup";

export type AddCommentFormComponentProps = {
  ticket: TicketViewModel;
};

interface AddCommentFormProps {
  ticketId: number;
  creatorId: number;
  message: string;
}

export const AddCommentFormSchema = yup.object().shape({
  ticketId: yup.number().required(),
  creatorId: yup.number().required(),
  message: yup.string().required("Please write a message before post."),
});

export type AddCommentFormModel = AddCommentFormProps;
