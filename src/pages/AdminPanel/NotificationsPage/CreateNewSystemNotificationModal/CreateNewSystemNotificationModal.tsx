import { Controller, useForm } from "react-hook-form";
import Modal from "../../../../components/Modal/Modal";
import {
  createNewSystemNotificationDefaults,
  CreateNewSystemNotificationFormModel,
  CreateNewSystemNotificationModalProps,
  createNewsystemNotificationSchema,
} from "./types";
import { yupResolver } from "@hookform/resolvers/yup";
import { Textarea } from "../../../../components/Textarea";
import Button from "../../../../components/Buttons/Button/Button";
import { apiNotification } from "../../../../store/api/enhances/enhancedApiAdmin copy";
import { useAppSelector } from "../../../../store/hooks";
import { toast } from "react-toastify";
import { RiInformation2Line } from "react-icons/ri";

export default function CreateNewSystemNotificationModal({
  isOpen,
  onClose,
}: CreateNewSystemNotificationModalProps) {
  // States
  const currentUser = useAppSelector((state) => state.user);
  // Queries
  const [createNewSystemNotificaiton] =
    apiNotification.usePostApiNotificationCreateSystemNotificationMutation();
  // Mutations
  // Form
  const form = useForm<CreateNewSystemNotificationFormModel>({
    defaultValues: createNewSystemNotificationDefaults,
    resolver: yupResolver(createNewsystemNotificationSchema),
  });

  // Handlers
  const handleCreateNewSystemNotificationButtonClick = () => {
    const f = form.getValues();
    createNewSystemNotificaiton({
      createSystemNotificationRm: {
        title: f.title,
        message: f.message,
        creatorId: currentUser.id,
      },
    })
      .unwrap()
      .then((res) => {
        if (res.code == 200) {
          toast.success(res.message);
          onClose();
        }
      })
      .catch((err) => {
        if (err) {
          toast.error(err.message);
        }
      })
      .finally();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Header>
        <div className="flex gap-2 items-center">
          <RiInformation2Line className="text-2xl" />
          <h1>Send New System Notification</h1>
        </div>
      </Modal.Header>
      <Modal.Content>
        <div className="w-full">
          <form
            className="flex flex-col gap-2"
            onSubmit={form.handleSubmit(
              handleCreateNewSystemNotificationButtonClick
            )}
          >
            <div className="flex flex-col gap-2">
              <div className=" p-2 flex flex-col gap-2 focus-within:border-teal-700">
                <Controller
                  name="title"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Textarea
                      {...field}
                      invalid={fieldState.error?.message}
                      className="w-full min-h-10 p-2 outline-none"
                      label="Title"
                      placeholder="Type here a title for notification that you would like to send to users."
                    />
                  )}
                />
              </div>
            </div>
            <div className=" p-2 flex flex-col gap-2 focus-within:border-teal-700">
              <Controller
                name="message"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Textarea
                    {...field}
                    invalid={fieldState.error?.message}
                    className="w-full min-h-48 p-2 outline-none"
                    label="Notification"
                    placeholder="Type here a message for notification that you would like to send to users"
                  />
                )}
              />
            </div>
            <div className="w-full flex">
              <Button
                onClick={form.handleSubmit(
                  handleCreateNewSystemNotificationButtonClick
                )}
                title={"Submit"}
                className="flex w-full"
                varient="success"
              />
            </div>
          </form>
        </div>
      </Modal.Content>
    </Modal>
  );
}
