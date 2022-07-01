import ReactDOM from "react-dom";
import { useEffect, useMemo } from "react";
import style from "./modal.module.css";
import { ModalOverlay } from "./modal-overlay/modal-overlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export const Modal = ({children, title, onClose}) => {
   
  useEffect(() => {
    const escapeKeyFunc = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", escapeKeyFunc);
    return () => {
      window.removeEventListener("keydown", escapeKeyFunc);
    };
  }, []);
 
  const reactModals = document.getElementById("react-modals");
  return ReactDOM.createPortal(
    <>
      <div className={style.Modal}>
        <div className={style.modalHeader}>
          <h2 className={style.h2}>{title}</h2>
          <CloseIcon type="primary" onClick={onClose} />
        </div>
        {children}
      </div>
      <ModalOverlay onClose={onClose} />
    </>,
    reactModals
  );
};