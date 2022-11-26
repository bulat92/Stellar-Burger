import style from "./smartphone-menu.module.css";
import React, { useState } from "react";
import {
  ProfileIcon,
  ListIcon,
  BurgerIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useLocation } from "react-router-dom";
import { ButtonsWithIconsSmartphoneMenu } from "./ButtonsWithIconsSmartphoneMenu/ButtonsWithIconsSmartphoneMenu";

export const SmartphoneMenu: React.FC<{ Switch: boolean }> = ({ Switch }) => {
  return (
    <nav
      className={style.navSmartphoneMenu}
      style={{ height: !Switch ? "0" : "300px" }}
    >
      <ul> 
        <ButtonsWithIconsSmartphoneMenu
          icon={<BurgerIcon type="secondary" />}
          children={"Конструктор"}
        />
        <ButtonsWithIconsSmartphoneMenu
          icon={<ListIcon type="secondary" />}
          children={"Лента заказов"}
        />

        <li className={style.li}>
          <ProfileIcon type="secondary" />
          Личный кабинет <ArrowUpIcon type="secondary" />
          
        </li>
        <ul>
            <li>Профиль</li>
            <li>Историй заказов</li>
            <li>Выход</li>
          </ul>
      </ul>
    </nav>
  );
};
