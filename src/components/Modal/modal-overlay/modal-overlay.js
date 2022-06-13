import style from "./modal-overlay.module.css";

export const ModalOverlay = ({onClose}) => {

  return (
    <div
      className={style.ModalOverlay}
        onClick={onClose}
    ></div>
  );
};