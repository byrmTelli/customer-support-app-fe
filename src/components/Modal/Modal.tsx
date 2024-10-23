import { createContext, useCallback, useContext, useRef } from "react";
import { ModalContentProps, ModalHeaderProps, ModalProps } from "./types";

// Context
const ModalContext = createContext<
  { isOpen: boolean; onClose: () => void } | undefined
>(undefined);

export default function Modal({ isOpen, children, onClose }: ModalProps) {
  // Ref
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    },
    [isOpen, children, onClose]
  );

  document.addEventListener("mousedown", handleClickOutside);

  if (!isOpen) {
    document.removeEventListener("mousedown", handleClickOutside);
  }

  return (
    <ModalContext.Provider value={{ isOpen, onClose }}>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out opacity-100">
        <div
          ref={modalRef}
          className="shadow-lg w-full max-w-3xl mx-auto select-none rounded-lg transform transition-transform duration-300 ease-in-out scale-100"
        >
          {children}
        </div>
      </div>
    </ModalContext.Provider>
  );
}

Modal.Header = function Header({ children }: ModalHeaderProps) {
  // Context
  const context = useContext(ModalContext);

  return (
    <div className="flex justify-between items-center px-6 py-6 bg-teal-700 text-gray-200 rounded-t-lg">
      <div className="w-2/3">{children}</div>
      <button
        className="text-gray-200 hover:text-gray-300"
        onClick={context?.onClose}
      >
        &times;
      </button>
    </div>
  );
};

Modal.Content = function Content({ children }: ModalContentProps) {
  return (
    <div className="h-[400px] bg-gray-200 p-4 flex w-full">{children}</div>
  );
};
