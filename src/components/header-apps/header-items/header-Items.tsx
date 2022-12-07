import style from "./header-Items.module.css";
import { ButtonsWithIcons } from "./buttons-with-icons";
import {
  ProfileIcon,
  ListIcon,
  BurgerIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

export const HeaderItems = () => {
  return (
    <nav className={style.navMain}>
      <div className={style.boxItems}>
        <ButtonsWithIcons
          icon={<BurgerIcon type={"secondary"} />}
          linkAddress={""}
          exactBool={true}
        >
          Конструктор
        </ButtonsWithIcons>

        <ButtonsWithIcons
          icon={<ListIcon type={"secondary"} />}
          linkAddress={"feed"}
          exactBool={true}
        >
          Лента заказов
        </ButtonsWithIcons>
      </div>
      <ButtonsWithIcons
        icon={<ProfileIcon type={"secondary"} />}
        linkAddress={"profile"}
        exactBool={false}
      >
        Личный кабинет
      </ButtonsWithIcons>
    </nav>
  );
};
