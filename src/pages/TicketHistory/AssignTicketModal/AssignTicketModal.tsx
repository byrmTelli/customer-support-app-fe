import Modal from "../../../components/Modal/Modal";
import { ModalProps } from "../../../components/Modal/types";
import Select from "../../../components/Select/Select";

export default function AssignTicketModal({ ...props }: ModalProps) {
  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <Modal.Header>
          <h1 className="">Header</h1>
        </Modal.Header>
        <Modal.Content>
          <div className="w-full h-full bg-green-200">
            <h1>Merhaba</h1>
          </div>
        </Modal.Content>
      </Modal>
    </>
  );
}
