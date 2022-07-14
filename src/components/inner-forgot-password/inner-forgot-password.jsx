import style from "./inner-forgot-password.module.css";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { forgotPasswordFetch } from "../../services/action/forgot-password-action";

export const ForgotPasswordInner = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(forgotPasswordFetch(value));
  };

  return (
    <form className={style.ForgotPasswordInner} onSubmit={onSubmit}>
      <p className={style.ForgotPasswordHeader}>Восстановление пароля</p>
      <div className={style.mbInput}>
        <Input
          value={value}
          name={"forgotP"}
          placeholder={"Укажите e-mail"}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <Button type="primary" size="medium">
        Восстановить
      </Button>
      <div className={style.option}>
        <p className="mr-2">Вспомнили пароль?</p>
        <Link to="/login">Войти</Link>
      </div>
    </form>
  );
};
