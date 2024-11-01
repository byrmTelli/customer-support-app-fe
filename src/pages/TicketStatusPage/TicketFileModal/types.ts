import { ModalProps } from "../../../components/Modal/types";
import { TicketAttacmentViewModel } from "../../../store/api/generated/generatedApiTicket";

interface TicketFileModalComponentProps {
  file: TicketAttacmentViewModel | null;
}
export type TicketFileModalProps = ModalProps & TicketFileModalComponentProps;
