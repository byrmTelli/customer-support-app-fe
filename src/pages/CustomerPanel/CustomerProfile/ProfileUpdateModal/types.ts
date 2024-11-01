import { ModalProps } from "../../../../components/Modal/types";

interface UpdateProfileModalComponentProps {}
export type UpdateProfileFormModelProps = {
  id?: number;
  adress?: string;
  image?: string;
  phone?: string;
  username: string;
  name: string;
  surname: string;
};

export type UpdateProfileModalProps = ModalProps &
  UpdateProfileModalComponentProps;
