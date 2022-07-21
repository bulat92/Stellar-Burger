import style from "./inner-register.module.css";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState, useRef } from "react";
import { registerFetch } from "../../services/action/register-action";
import React from 'react';

export const RegisterInner = () => {
  const dispatch = useDispatch();
  const passwordRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
 
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // @ts-ignore
    dispatch(registerFetch(email, password, name));
  };

  return (
    <section className={style.RegisterInner}>
      <p className={style.registrationHeader}>Регистрация</p>
      <form className={style.boxInputs} onSubmit={onSubmit}>
        <div className={style.mbInput}>
          <Input
            onChange={(e)=>{setName(e.target.value)}}
            ref={nameRef}
            value={name}
            name={"name"}
            placeholder={"Имя"}
          />
        </div>
        <div className={style.mbInput}>
          <Input
            onChange={(e)=>{setEmail(e.target.value)}}
            ref={emailRef}
            value={email}
            name={"email"}
            type={"email"}
            placeholder={"E-mail"}
          />
        </div>
        <div className={style.mbInput}>
          <Input
            onChange={(e)=>{setPassword(e.target.value)}}
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
