import style from "./modal-overlay.module.css";
import React from 'react';

export const ModalOverlay: React.FC<{onClose: ()=>void}> = ({onClose}) => {

  return (
    <div
      className={style.ModalOverlay}
        onClick={onClose}
    ></div>
  );
};