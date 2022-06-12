import style from "./ModalOverlay.module.css";

export const ModalOverlay = ({onClose}) => {

  return (
    <div
      className={style.ModalOverlay}
        onClick={onClose}
    ></div>
  );
};