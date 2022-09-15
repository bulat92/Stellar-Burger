import style from "./inner-login.module.css";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { useDispatch } from "../../interface-and-types/hooks";
import { useState } from "react";
import { loginFetch } from "../../services/action/login-action";

export const LoginInner = () => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState<string>("123456");
  const [email, setEmail] = useState<string>("damask161092@gmail.com");

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault(); 
    dispatch(loginFetch(email, password));
  };

  return (
    <section className={style.LoginInner}>
      <p className={style.loginHeader}>Вход</p>
      <form className={style.boxInputs} onSubmit={onSubmit}>
        <div className={style.mbInput} data-test='email-input'>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name={"login"}
            placeholder={"E-mail"}

            data-test="login"
          />
        </div>
        <div className={style.mbInput} data-test='password-input'>
          <Input
            icon={"ShowIcon"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name={"password"}
            type={"password"}
            placeholder={"Пароль"}

            data-test="password"
          />
        </div>
        <Button type="primary" size="medium">
          Войти
        </Button>
      </form>
      <div className={style.boxOptions}>
        <div className={`${style.option} mb-4`}>
          <p className="mr-2">Вы — новый пользователь?</p>
          <Link to="/register">Зарегистрироваться</Link>
        </div>
        <div className={style.option}>
          <p className="mr-2">Забыли пароль?</p>
          <Link to="/forgot-password">Восстановить пароль</Link>
        </div>
      </div>
    </section>
  );
};
