import { useState, useEffect } from "react";
import style from "./header-Items.module.css";
import { ButtonsWithIcons } from "./buttons-with-icons/buttons-with-icons";
import {
  ProfileIcon,
  ListIcon,
  BurgerIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useLocation } from "react-router-dom"; 

export const HeaderItems = () => {

  type TTState = "secondary" | "primary";

  const [BurgerIconType, setBurgerIconType] = useState<TTState>("secondary");
  const [ListIconType, setListIconType] = useState<TTState>("secondary");
  const [ProfileIconType, setProfileIconType] = useState<TTState>("secondary");

  const location = useLocation();

  useEffect(() => {  
    switch (location.pathname) {
      case "/":
        setBurgerIconType("primary");
        setListIconType("secondary");
        setProfileIconType("secondary");
        break;
      case "/feed":
        setBurgerIconType("secondary");
        setListIconType("primary");
        setProfileIconType("secondary");
        break;
      case "/profile": 
        setBurgerIconType("secondary");
        setListIconType("secondary");
        setProfileIconType("primary");
        break;
      default:
        setBurgerIconType("secondary");
        setListIconType("secondary");
        setProfileIconType("secondary");
        break;
    }
  }, [location.pathname, BurgerIconType, ListIconType, ProfileIconType]);
 
  return (
    <nav className={style.nav}>
      <div className={style.boxItems}>
        <ButtonsWithIcons
          icon={<BurgerIcon type={BurgerIconType} />}
          onMouseOver={() => setBurgerIconType("primary")}
          onMouseOut={() => setBurgerIconType("secondary")} 
          linkAddress={""}
        >
          Конструктор
        </ButtonsWithIcons>

        <ButtonsWithIcons
          icon={<ListIcon type={ListIconType} />}
          onMouseOver={() => setListIconType("primary")}
          onMouseOut={() => setListIconType("secondary")} 
          linkAddress={"feed"}
        >
          Лента заказов
        </ButtonsWithIcons>
      </div>
      <ButtonsWithIcons
        icon={<ProfileIcon type={ProfileIconType} />}
        onMouseOver={() => setProfileIconType("primary")}
        onMouseOut={() => setProfileIconType("secondary")} 
        linkAddress={"profile"}
      >
        Личный кабинет
      </ButtonsWithIcons>
    </nav>
  );
};
