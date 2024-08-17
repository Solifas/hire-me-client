import React, { PropsWithChildren, useContext, useState } from "react";
import { MODALS, ModalType } from "../types/ModalType";

interface ModalProps {
  readonly show: (modalType: ModalType) => void;
  readonly hide: () => void;
}

export const ModalContext = React.createContext<ModalProps | undefined>(undefined);
export const ModalProvider = (props: PropsWithChildren<{}>) => {

  const [modalType, setModalType] = useState<ModalType | undefined>(undefined);

  const show = (type: ModalType) => {
    setModalType(type);
  }

  const renderModal = () => {
    if (!modalType || !MODALS[modalType]) {
      return null;
    }

    const Modal = MODALS[modalType];
    return <Modal isOpen onClose={hide} />;
  }

  const hide = () => {
    setModalType(undefined);
  }

  return (
    <ModalContext.Provider value={{ show, hide }}>
      {renderModal()}
      {props.children}
    </ModalContext.Provider>
  )
}

export function useModal() {
  return useContext(ModalContext);
}
