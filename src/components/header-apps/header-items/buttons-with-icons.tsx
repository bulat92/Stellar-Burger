import style from "./header-Items.module.css";
import { NavLink } from "react-router-dom";
import React from "react";

interface TButtonsWithIcons {
  linkAddress: string;
  exactBool?: boolean;
  children: string;
  icon: React.ReactNode;
}

export const ButtonsWithIcons: React.FC<TButtonsWithIcons> = ({
  icon,
  linkAddress,
  children,
  exactBool,
}) => {
  return (
    <NavLink
      to={`/${linkAddress}`}
      exact={exactBool}
      activeClassName={style.activeClassName}
    >
      <div className={style.boxItemsChild}>
        <i className={style.profileIcon}>{icon}</i>
        {children}
      </div>
    </NavLink>
  );
};
