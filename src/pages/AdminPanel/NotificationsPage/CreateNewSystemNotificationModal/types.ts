import { ModalProps } from "../../../../components/Modal/types";
import * as yup from 'yup';

export const createNewSystemNotificationDefaults = {
    title:"",
    message:"",
    creatorId: 0
}

export const createNewsystemNotificationSchema = yup.object().shape({
    title:yup.string().required("Title field is required."),
    message:yup.string().required("Message field is required."),
    creatorId:yup.number().required("There is missing required field.")
})



interface CreateNewSystemNotificationModalComponentProps{

}

export type CreateNewSystemNotificationFormModel = typeof createNewSystemNotificationDefaults;
export type CreateNewSystemNotificationModalProps = CreateNewSystemNotificationModalComponentProps & ModalProps;