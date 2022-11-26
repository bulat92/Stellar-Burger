import React from "react";
import style from "./ButtonsWithIconsSmartphoneMenu.module.css";

interface IButtonsWithIconsSmartphoneMenu {
  children: string;
  icon: React.ReactNode;
}

export const ButtonsWithIconsSmartphoneMenu: React.FC<
  IButtonsWithIconsSmartphoneMenu
> = ({ children, icon }) => {
  return (
    <li className={style.li}>
      <i className="m-1">{icon}</i>
      {children}
    </li>
  );
};
