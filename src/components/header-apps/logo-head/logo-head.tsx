import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { useHistory } from "react-router-dom";
import style from "./logo-head.module.css";

export const LogoHead = () => {
  const history = useHistory();
  return (
    <div className={style.boxLogo}>
      <div
        className={style.logo}
        onClick={() => {
          history.replace({ pathname: "/" });
        }}
      >
        <Logo />
      </div>
    </div>
  );
};
