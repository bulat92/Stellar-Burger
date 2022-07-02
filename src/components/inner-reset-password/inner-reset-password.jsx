import style from "./inner-reset-password.module.css";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { resetPasswordFetch } from "../../services/action/reset-password-action";

export const ResetPasswordInner = () => {
  const dispatch = useDispatch();

  const [newPassword, setNewPassword] = useState("");
  const [code, setCode] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(resetPasswordFetch(newPassword, code));
  };

  return (
    <form className={style.ResetPasswordInner} onSubmit={onSubmit}>
      <p className={style.ResetPasswordInnerHeader}>Восстановление пароля</p>
      <div className={style.mbInput}>
        <Input
          onChange={(e) => setNewPassword(e.target.value)}
          value={newPassword}
          type={"password"}
          name={"newP"}
          placeholder={"Введите новый пароль"}
        />
      </div>
      <div className={style.mbInput}>
        <Input
          onChange={(e) => setCode(e.target.value)}
          value={code}
          name={"codFromNewPassword"}
          placeholder={"Введите код из письма"}
        />
      </div>
      <Button type="primary" size="medium">
        Сохранить
      </Button>
      <div className={style.option}>
        <p className="mr-2">Вспомнили пароль?</p>
        <Link to="/login">Войти</Link>
      </div>
    </form>
  );
};
