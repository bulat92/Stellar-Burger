import style from "./smartphone-menu-button.module.css";
import React, { useRef } from "react";

export const SmartphoneMenuButton: React.FC<{
  Switch: boolean;
  setSwitch: (value: boolean) => void;
}> = ({ Switch, setSwitch }) => {
  const layer = useRef<HTMLDivElement>(null),
    layer1 = useRef<HTMLDivElement>(null),
    layer2 = useRef<HTMLDivElement>(null);

  const crosshairChangeFunc = () => {
    if (layer1.current && layer.current && layer2.current) {
      if (Switch) {
        layer1.current.style.opacity = "1";
        layer1.current.style.transform = "rotate(0deg)";
        layer.current.style.transform = "rotate(0deg)";
        layer2.current.style.transform = "rotate(0deg)";
        setSwitch(false);
      } else {
        layer1.current.style.opacity = "0";
        layer1.current.style.transform = "rotate(45deg)";
        layer.current.style.transform = "rotate(45deg) translate(0, 7px)";
        layer2.current.style.transform = "rotate(-45deg) translate(0, -7px)";
        setSwitch(true);
      }
    }
  };

  return (
    <div className={style.MenuButton} onClick={crosshairChangeFunc}>
      <div ref={layer} className={style.layer}></div>
      <div ref={layer1} className={style.layer}></div>
      <div ref={layer2} className={style.layer}></div>
    </div>
  );
};
