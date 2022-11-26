import style from "./header-app.module.css";
import { LogoHead } from "./logo-head/logo-head";
import { HeaderItems } from "./header-items/header-Items";
import { SmartphoneMenuButton } from "./smartphone-menu-button/smartphone-menu-button";
import { SmartphoneMenu } from "./smartphone-menu/smartphone-menu";
import { useState } from "react";

export const AppHeader = () => {
  const [SmartphoneMenuSwitch, setSmartphoneMenuSwitch] =
    useState<boolean>(false);

  const setSmartphoneMenuSwitchFunc = (value: boolean) => {
    setSmartphoneMenuSwitch(value);
  };

  return (
    <div className={style.underHeader}>
      <header className={style.header}>
        <HeaderItems />
        <LogoHead />
        <SmartphoneMenuButton
          Switch={SmartphoneMenuSwitch}
          setSwitch={setSmartphoneMenuSwitchFunc}
        />
      </header>
      <SmartphoneMenu Switch={SmartphoneMenuSwitch} />
    </div>
  );
};
