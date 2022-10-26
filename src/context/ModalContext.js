import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
   
  const closeModal = () => {
    setIsOpen(false);
  };

  const values = {
    isOpen,
    setIsOpen,
    openModal,
    closeModal,
  };

  return (
    <ModalContext.Provider value={values}>{children}</ModalContext.Provider>
  );
};

const useModal = () => useContext(ModalContext);

export { useModal, ModalProvider };
