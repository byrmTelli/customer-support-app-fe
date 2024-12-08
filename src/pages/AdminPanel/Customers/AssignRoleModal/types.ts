import { ModalProps } from "../../../../components/Modal/types";

interface AssignRoleModalComponentProps {
  requestModel: {
    id: number;
    roleName: string;
  };
}
export type ASsignRoleModalProps = ModalProps & AssignRoleModalComponentProps;
