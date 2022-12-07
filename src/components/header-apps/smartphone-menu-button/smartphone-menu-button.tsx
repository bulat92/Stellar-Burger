import style from "./smartphone-menu-button.module.css";
import React from "react";

export const SmartphoneMenuButton: React.FC<{
  Switch: boolean;
  setSwitch: (value: boolean) => void;
}> = ({ Switch, setSwitch }) => {
   
  return (
    <div className={style.MenuButton} onClick={()=> setSwitch(!Switch)}>
      <div className={`${style.layer} ${Switch && style.layer0}`}></div>
      <div className={`${style.layer} ${Switch && style.layer1}`}></div>
      <div className={`${style.layer} ${Switch && style.layer2}`}></div>
    </div>
  );
};
