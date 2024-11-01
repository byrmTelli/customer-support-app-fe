import Modal from "../../../components/Modal/Modal";
import { TicketFileModalProps } from "./types";

export default function TicketFileModal({
  file,
  isOpen,
  onClose,
}: TicketFileModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Content>
        {file && (
          <div className="w-full h-full flex self-center justify-center">
            {file.fileType?.startsWith("image/") ? (
              <img src={file.file ?? ""} />
            ) : file.fileType === "application/pdf" ? (
              <embed
                src={file.file ?? ""}
                type="application/pdf"
                className="w-full lg:h-[750px]"
              />
            ) : (
              <a href={file.file ?? ""} download={file.fileName}>
                Dosyayı İndir
              </a>
            )}
          </div>
        )}
      </Modal.Content>
    </Modal>
  );
}
