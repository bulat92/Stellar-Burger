import ReactDOM from "react-dom";
import { useEffect } from "react";
import style from "./modal.module.css";
import { ModalOverlay } from "./modal-overlay/modal-overlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const Modal = ({ children, onCloseKey, onClose, type }) => {
  
  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      onCloseKey(e);
    });

    return () => {
      window.removeEventListener("keydown", (e) => {
        onCloseKey(e);
      });
    };
  }, []);

  const reactModals = document.getElementById("react-modals");
  return ReactDOM.createPortal(
    <>
      <div className={style.Modal}>
        <div className={style.modalHeader}>
          <h2 className={style.h2}>
            {type === "Ingredient" && "Детали ингредиента"}
          </h2>
          <CloseIcon type="primary" onClick={onClose} />
        </div>
        {children}
      </div>
      <ModalOverlay onClose={onClose} />
    </>,
    reactModals
  );
};

export default Modal;
