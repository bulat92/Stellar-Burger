import style from "./inner-register.module.css";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState, useRef } from "react";
import { registerFetch } from "../../services/action/register-action";

export const RegisterInner = () => {
  const dispatch = useDispatch();
  const passwordRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onChange = () => {
    setPassword(passwordRef.current.value);
    setName(nameRef.current.value);
    setEmail(emailRef.current.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(registerFetch(email, password, name));
  };

  return (
    <section className={style.RegisterInner}>
      <p className={style.registrationHeader}>Регистрация</p>
      <form className={style.boxInputs} onSubmit={onSubmit}>
        <div className={style.mbInput}>
          <Input
            onChange={onChange}
            ref={nameRef}
            value={name}
            name={"name"}
            placeholder={"Имя"}
          />
        </div>
        <div className={style.mbInput}>
          <Input
            onChange={onChange}
            ref={emailRef}
            value={email}
            name={"email"}
            type={"email"}
            placeholder={"E-mail"}
          />
        </div>
        <div className={style.mbInput}>
          <Input
            onChange={onChange}
            ref={passwordRef}
            value={password}
            icon={"ShowIcon"}
            name={"password"}
            type={"password"}
            placeholder={"Пароль"}
          />
        </div>
        <Button type="primary" size="medium">
          Зарегистрироваться
        </Button>
      </form>

      <div className={style.option}>
        <p className="mr-2">Уже зарегистрированы?</p>
        <Link to="/login">Войти</Link>
      </div>
    </section>
  );
};
