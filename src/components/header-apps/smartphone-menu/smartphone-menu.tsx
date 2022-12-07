import style from "./smartphone-menu.module.css";
import React, { useState, useEffect, useRef } from "react";
import {
  ProfileIcon,
  ListIcon,
  BurgerIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { ButtonsWithIconsSmartphoneMenu } from "./buttons-withIcons-smartphone-menu/buttons-withIcons-smartphone-menu";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch } from "../../../interface-and-types/hooks";
import { logoutFetch } from "../../../services/action/logout-action";

export const SmartphoneMenu: React.FC<{
  Switch: boolean;
  setSwitch: (value: boolean) => void;
}> = ({ Switch, setSwitch }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const ref = useRef<HTMLLIElement>(null);

  const [personalAreaSwitch, setPersonalAreaSwitch] = useState<boolean>(false),
    [colorOnOf, setColorOnOf] = useState<boolean>(false);

  const logout = () => {
    dispatch(logoutFetch());
  };

  useEffect(() => {
    if (ref.current) {
      if (
        location.pathname === "/profile/orders" ||
        location.pathname === "/profile"
      ) {
        setColorOnOf(true);
      } else {
        setColorOnOf(false);
      }
    }
  }, [location.pathname]);

  return (
    <nav
      className={style.navSmartphoneMenu}
      style={{ height: !Switch ? "0" : "60vh" }}
    >
      <ul>
        <li
          className={style.liMenu}
          onClick={() => setPersonalAreaSwitch(!personalAreaSwitch)}
          ref={ref}
          style={{ color: colorOnOf ? "white" : "#8585ad" }}
        >
          <i className={`${style.ISvg} m-2`}>
            <ProfileIcon type={colorOnOf ? "primary" : "secondary"} />
          </i>
          Личный кабинет
          {personalAreaSwitch ? (
            <ArrowUpIcon type={colorOnOf ? "primary" : "secondary"} />
          ) : (
            <ArrowDownIcon type={colorOnOf ? "primary" : "secondary"} />
          )}
        </li>
        <ul
          className={`${style.prsonalAreaUl} ml-5 mt-1`}
          style={{ height: !personalAreaSwitch ? "0" : "15vh" }}
        >
          <NavLink
            to="/profile"
            exact={true}
            activeClassName={style.activeClassName}
          >
            <li
              className={"m-3"}
              onClick={() => {
                setSwitch(!Switch);
              }}
            >
              Профиль
            </li>
          </NavLink>
          <NavLink
            to="/profile/orders"
            exact={true}
            activeClassName={style.activeClassName}
          >
            <li
              className={"m-3"}
              onClick={() => {
                setSwitch(!Switch);
              }}
            >
              Историй заказов
            </li>
          </NavLink>
          <li
            className={`${style.liMenu} m-3`}
            onClick={() => {
              setSwitch(!Switch);
              logout();
            }}
          >
            Выход
          </li>
        </ul>
        <ButtonsWithIconsSmartphoneMenu
          icon={<BurgerIcon type="secondary" />}
          children={"Конструктор"}
          onClick={() => setSwitch(!Switch)}
          linkAddress={""}
        />
        <ButtonsWithIconsSmartphoneMenu
          icon={<ListIcon type="secondary" />}
          children={"Лента заказов"}
          onClick={() => setSwitch(!Switch)}
          linkAddress={"feed"}
        />
      </ul>
    </nav>
  );
};
