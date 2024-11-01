import {
  AddCommentFormComponentProps,
  AddCommentFormModel,
  AddCommentFormSchema,
} from "./constants";
import { TicketStatusTypes } from "../../../constants/ticketStatus";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { Controller, useForm } from "react-hook-form";
import { Textarea } from "../../../components/Textarea";
import { useAppSelector } from "../../../store/hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import { apiTicket } from "../../../store/api/enhances/enhancedApiTicket";
import { toast } from "react-toastify";

export default function AddCommentForm({
  ticket,
}: AddCommentFormComponentProps) {
  // States
  const user = useAppSelector((state) => state.user);
  // Queries
  const [addCommentToTicket, addCommentToTickeTMutation] =
    apiTicket.usePostApiCommentAddCommentToTicketMutation();
  // Forms
  const form = useForm<AddCommentFormModel>({
    defaultValues: {
      creatorId: user.id ?? 0,
      ticketId: ticket.id ?? 0,
      message: "",
    },
    resolver: yupResolver(AddCommentFormSchema),
  });
  // Handlers
  const handleSubmitButtonClick = () => {
    const f = form.getValues();

    addCommentToTicket({
      addCommentToTicketRequestModel: {
        creatorId: user.id,
        ticketId: ticket.id,
        message: f.message,
      },
    })
      .unwrap()
      .then((res) => {
        if (res.success) {
          toast.success(res.message);
        }
      })
      .catch((err) => {
        toast.error(err.message);
      })
      .finally();

    form.reset();
  };

  return (
    <div className="w-full flex gap-2 py-2">
      {/* Dosya Yükleme ve Yorum Yazma */}
      {ticket.status === TicketStatusTypes.Waiting && (
        <div className="w-full flex flex-col gap-2 ">
          <h1 className="font-semibold px-4">Comment</h1>
          <form
            className="w-full flex"
            onSubmit={form.handleSubmit(handleSubmitButtonClick)}
          >
            <div className="w-full flex items-center">
              <Controller
                name="message"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Textarea
                    {...field}
                    invalid={fieldState.error?.message}
                    className="w-full h-full p-2 outline-none rounded-l-lg italic focus:not-italic"
                    placeholder="Do you need more help? Please let us know..."
                  />
                )}
              />
            </div>
            <button
              type="submit"
              onClick={form.handleSubmit(handleSubmitButtonClick)}
              className="border border-gray-400 rounded-r-lg p-2 w-[6rem] flex items-center justify-center text-gray-200 bg-teal-700"
            >
              <FaRegArrowAltCircleUp className="text-2xl" />
            </button>
            {}
          </form>
        </div>
      )}
    </div>
  );
}
