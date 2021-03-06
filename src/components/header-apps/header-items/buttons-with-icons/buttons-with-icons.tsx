import style from "../header-Items.module.css";
import { NavLink } from "react-router-dom";
import React from 'react';

interface TButtonsWithIcons {
  linkAddress: string;
  onMouseOver: ()=>void;
  onMouseOut: ()=>void;
  children: string;
  icon: any;
}

export const ButtonsWithIcons: React.FC<TButtonsWithIcons> = ({icon, linkAddress, onMouseOver, onMouseOut, children }) => {
  
  return (
    <NavLink to={`/${linkAddress}`} exact activeClassName={style.activeClassName}>
      <div
        className={style.boxItemsChild}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      >
        <i className={style.profileIcon}>{icon}</i>
        {children}
      </div>
    </NavLink>
  );
}; 