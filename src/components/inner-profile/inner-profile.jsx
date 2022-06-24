import style from "./inner-profile.module.css";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState, useRef } from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { logoutFetch } from "../../services/action/logout-action";
import { getCookie } from "../../services/cookie/cookie-functions";

export const ProfileInner = () => {
  const { url } = useRouteMatch();

  const passwordRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const [password, setPassword] = useState("123456789");
  const [name, setName] = useState("Марк");
  const [email, setEmail] = useState("mail@stellar.burgers");

  const onChange = () => {
    setPassword(passwordRef.current.value);
    setName(nameRef.current.value);
    setEmail(emailRef.current.value);
  };

  return (
    <section className={style.ProfileInner}>
      <div className={style.boxTabs}>
        <Link
          to="/profile"
          className={
            url === "/profile" ? style.profileTabActive : style.profileTab
          }
        >
          Профиль
        </Link>
        <Link
          to="/profile/orders"
          className={
            url === "/profile/orders"
              ? style.profileTabActive
              : style.profileTab
          }
        >
          Историй заказов
        </Link>
        <p
          className={style.profileTab}
          onClick={() => {
            console.log(getCookie("token"));
            logoutFetch(getCookie("token"));
          }}
        >
          Выход
        </p>
        <p className={style.profileDescription}>
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <div className={style.boxInputs}>
        <div className={style.mbInput}>
          <Input
            icon={"EditIcon"}
            onChange={onChange}
            ref={nameRef}
            value={name}
            name={"name"}
            placeholder={"Имя"}
          />
        </div>
        <div className={style.mbInput}>
          <Input
            icon={"EditIcon"}
            onChange={onChange}
            ref={emailRef}
            value={email}
            name={"login"}
            placeholder={"Логин"}
          />
        </div>
        <div className={style.mbInput}>
          <Input
            icon={"EditIcon"}
            onChange={onChange}
            ref={passwordRef}
            value={password}
            type={"password"}
            placeholder={"Пароль"}
          />
        </div>
      </div>
    </section>
  );
};
