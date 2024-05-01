import { createPortal } from "react-dom";
import cn from "../../utils/cn";
import {
  ChangeEvent,
  ReactNode,
  createContext,
  useContext,
  useRef,
} from "react";
type TModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};
type TClose = {
  children?: ReactNode;
};
type THeader = TClose;
const ModalContext = createContext<TModalContext | null>(null);
type TModalContext = {
  onClose: () => void;
};

const Modal = ({ isOpen, onClose, children }: TModalProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const handleOutsideClose = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (!containerRef.current?.contains(e.target as Node)) {
      onClose();
    }
  };
  return createPortal(
    <ModalContext.Provider value={{ onClose }}>
      <div
        className={cn(
          "fixed inset-0 flex justify-center items-center bg-gray-500/70 invisible z-[999]",
          {
            visible: isOpen,
          }
        )}
        onClick={handleOutsideClose}
      >
        <div
          ref={containerRef}
          className="bg-white p-4 w-full max-w-sm rounded-md"
        >
          {children}
        </div>
      </div>
    </ModalContext.Provider>,
    document.getElementById("portal") as Element
  );
};

const CloseButton = ({ children }: TClose) => {
  const { onClose } = useContext(ModalContext) as TModalContext;
  return (
    <button className="" onClick={onClose}>
      {children ? (
        children
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="size-6  bg-red-500 rounded-xl text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      )}
    </button>
  );
};

const Header = ({ children }: THeader) => {
  return (
    <div className="flex justify-between items-center w-full mb-3">
      {children}
    </div>
  );
};
Modal.Header = Header;
Modal.CloseButton = CloseButton;

export default Modal;
