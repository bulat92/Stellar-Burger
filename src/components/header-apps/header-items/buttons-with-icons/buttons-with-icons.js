import style from "../header-Items.module.css";
import { NavLink } from "react-router-dom";

export const ButtonsWithIcons = (props) => {
  
  return (
    <NavLink to={`/${props.linkAddress}`} exact activeClassName={style.activeClassName}>
      <div
        className={style.boxItemsChild}
        onMouseOver={props.onMouseOver}
        onMouseOut={props.onMouseOut}
      >
        <i className={style.profileIcon}>{props.icon}</i>
        {props.children}
      </div>
    </NavLink>
  );
}; 