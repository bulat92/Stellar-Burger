import { useState, useEffect } from "react";
import style from "./header-Items.module.css";
import { ButtonsWithIcons } from "./buttons-with-icons/buttons-with-icons";
import {
  ProfileIcon,
  ListIcon,
  BurgerIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useRouteMatch } from "react-router-dom";

export const HeaderItems = () => {
  const [BurgerIconType, setBurgerIconType] = useState("secondary");
  const [ListIconType, setListIconType] = useState("secondary");
  const [ProfileIconType, setProfileIconType] = useState("secondary");

  const { url } = useRouteMatch();

  useEffect(() => { 
    switch (url) {
      case "/":
        setBurgerIconType("primary");
        setListIconType("secondary");
        setProfileIconType("secondary");
        break;
      case "/profile/orders":
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
  }, [url, BurgerIconType, ListIconType, ProfileIconType]);

  const iconChangeFunc = (type) => {
    setBurgerIconType(type);
  };

  return (
    <nav className={style.nav}>
      <div className={style.boxItems}>
        <ButtonsWithIcons
          icon={<BurgerIcon type={BurgerIconType} />}
          onMouseOver={() => setBurgerIconType("primary")}
          onMouseOut={() => setBurgerIconType("secondary")}
          set={iconChangeFunc}
          linkAddress={""}
        >
          Конструктор
        </ButtonsWithIcons>

        <ButtonsWithIcons
          icon={<ListIcon type={ListIconType} />}
          onMouseOver={() => setListIconType("primary")}
          onMouseOut={() => setListIconType("secondary")}
          /* set={} */
          linkAddress={"profile/orders"}
        >
          Лента заказов
        </ButtonsWithIcons>
      </div>
      <ButtonsWithIcons
        icon={<ProfileIcon type={ProfileIconType} />}
        onMouseOver={() => setProfileIconType("primary")}
        onMouseOut={() => setProfileIconType("secondary")}
        /* set={} */
        linkAddress={"profile"}
      >
        Личный кабинет
      </ButtonsWithIcons>
    </nav>
  );
};
