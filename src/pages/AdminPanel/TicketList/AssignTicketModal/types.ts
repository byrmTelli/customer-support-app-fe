import { ModalProps } from "../../../../components/Modal/types";
import { AdminPanelTicketsTableViewModel } from "../../../../store/api/generated/generatedApiTicket";

interface AssingTicketModalComponentProps {
  selectedData: AdminPanelTicketsTableViewModel | null;
}

export type ASsignTicketModalProps = ModalProps &
  AssingTicketModalComponentProps;
