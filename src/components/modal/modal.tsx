import React from "react";
import ReactDOM from "react-dom";
import { useEffect } from "react";
import style from "./modal.module.css";
import { ModalOverlay } from "./modal-overlay/modal-overlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

type TModal = {
  children: any;
  title?: string | undefined;
  onClose: () => void;
};

export const Modal: React.FC<TModal> = ({
  children,
  title,
  onClose,
}): JSX.Element => {
  
  useEffect(() => {
    const escapeKeyFunc = (e: KeyboardEvent): void => {
      if (e.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", escapeKeyFunc);
    return () => {
      window.removeEventListener("keydown", escapeKeyFunc);
    };
  }, []);

  const reactModals = document.getElementById("react-modals") as HTMLDivElement;
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
