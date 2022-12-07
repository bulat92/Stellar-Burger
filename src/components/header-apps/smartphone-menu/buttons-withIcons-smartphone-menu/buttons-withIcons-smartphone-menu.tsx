import React from "react";
import style from "./buttons-withIcons-smartphone-menu.module.css";
import { NavLink } from 'react-router-dom';

interface IButtonsWithIconsSmartphoneMenu {
  children: string;
  icon: React.ReactNode;
  onClick: ()=>void;
  linkAddress: string
}

export const ButtonsWithIconsSmartphoneMenu: React.FC<
  IButtonsWithIconsSmartphoneMenu
> = ({ children, icon, onClick, linkAddress }) => {
  return (
    <NavLink  to={`/${linkAddress}`} exact={true} activeClassName={style.activeClassName}>
    <li className={style.li} onClick={onClick}>
      <i className={`${style.ISvg} m-2`}>{icon}</i>
      {children}
    </li>
    </NavLink>
  );
};
