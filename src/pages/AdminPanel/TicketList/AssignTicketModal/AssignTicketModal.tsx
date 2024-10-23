import { Controller, useForm } from "react-hook-form";
import Modal from "../../../../components/Modal/Modal";
import { Select } from "../../../../components/Select";
import { apiUser } from "../../../../store/api/enhances/enhancedApiUser";
import { ASsignTicketModalProps } from "./types";
import { formatDateTime } from "../../../../utils/utilsDate";
import Button from "../../../../components/Buttons/Button/Button";
import { apiTicket } from "../../../../store/api/enhances/enhancedApiTicket";
import {
  AssignTicketToHelpdeskFormModel,
  AssignToHelpdeskFormDefaults,
  AssigntoHelpdeskFormSchema,
} from "./constants";
import { yupResolver } from "@hookform/resolvers/yup";

export default function AssignTicketModal({
  ...props
}: ASsignTicketModalProps) {
  // States
  // Queries
  const getHelpdesksQuery = apiUser.useGetApiUserGetHelpdesksQuery();
  const [assignTicket, assignTicketMutation] =
    apiTicket.usePostApiTicketAssignTicketToHelpdeskMutation();

  const helpdesks = getHelpdesksQuery.data?.data ?? [];
  // Forms
  const form = useForm<AssignTicketToHelpdeskFormModel>({
    defaultValues: AssignToHelpdeskFormDefaults,
    resolver: yupResolver(AssigntoHelpdeskFormSchema),
  });
  // Handlers
  const handleSendButtonClick = () => {
    const { helpdesk } = form.getValues();
    console.log(helpdesk?.id);
    assignTicket({
      ticketId: props.selectedData?.id,
      assignToUserId: helpdesk?.id?.toString(),
    });
  };
  console.log("Selected data", props.selectedData);
  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <Modal.Header>
          <h1 className="">Header</h1>
        </Modal.Header>
        <Modal.Content>
          <div className="w-full h-full  p-4">
            <div className="py-2 px-4 flex flex-col gap-1 text-sm">
              <h1 className="text-lg mb-4">
                You are assigning this item right now.
              </h1>
              <h1>
                <span className="font-semibold">Created At: </span>
                {formatDateTime(props.selectedData?.createdAt ?? "")}
              </h1>
              <h1>
                <span className="font-semibold">Title: </span>
                {props.selectedData?.title}
              </h1>
              <h1>
                <span className="font-semibold">Content: </span>
                {props.selectedData?.content}
              </h1>
              <h1>
                <span className="font-semibold">Creator: </span>
                {props.selectedData?.creator?.fullName}
              </h1>
            </div>
            <form>
              <div className="w-full p-4">
                <Controller
                  name={"helpdesk"}
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Select
                      {...field}
                      label="Helpdesk"
                      invalid={fieldState.error?.message}
                      getLabelField={(item) => String(item.fullName)}
                      getValueField={(item) => String(item.id)}
                      options={helpdesks}
                    />
                  )}
                />
              </div>
              <div className="w-full flex items-center justify-end px-4">
                <Button onClick={handleSendButtonClick} title="Send" />
              </div>
            </form>
          </div>
        </Modal.Content>
      </Modal>
    </>
  );
}
