import style from "./inner-profile.module.css";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { logoutFetch } from "../../services/action/logout-action";
import { profileSaveCancelData } from "../../services/action/profile-action";
import { useDispatch, useSelector } from "react-redux";

export const ProfileInner = () => {
  const { name, email } = useSelector((store: any) => store.login);

  const dispatch = useDispatch();

  const [password, setPassword] = useState<string>("");
  const [nameInput, setName] = useState<string>(name);
  const [emailInput, setEmail] = useState<string>(email);
  const [saveOn, setSaveOn] = useState<boolean>(false);
  const [cancelOn, setCancelOn] = useState<boolean>(false);

  const onClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
    // @ts-ignore
    dispatch(logoutFetch());
  };

  const saveUserData = (e: React.SyntheticEvent) => { 
    if (password !== "" || nameInput !== name || emailInput !== email) {  
      e.preventDefault();
      setSaveOn(false);
      setCancelOn(true);
      if (password !== "") {
        // @ts-ignore
        dispatch(profileSaveCancelData(nameInput, emailInput, password));
      } else {
        // @ts-ignore
        dispatch(profileSaveCancelData(nameInput, emailInput));
      }
    }
  };

  const cancelUserData = (e: React.SyntheticEvent) => { 
      e.preventDefault();
      setCancelOn(false);
      // @ts-ignore
      dispatch(profileSaveCancelData(name, email));
      setName(name);
      setEmail(email)
    };

  useEffect(() => {
    if (password !== "" || nameInput !== name || emailInput !== email) {
      setSaveOn(true);
    } else {
      setSaveOn(false);
    }
  }, [password, nameInput, emailInput, name, email]);

  return (
    <section className={style.ProfileInner}>
      <div className={style.boxTabs}>
        <NavLink
          activeClassName={style.profileTabActive}
          to="/profile"
          className={style.profileTab}
        >
          Профиль
        </NavLink>
        <NavLink
          activeClassName={style.profileTabActive}
          to="/profile/orders"
          className={style.profileTab}
        >
          Историй заказов
        </NavLink>
        <p className={style.profileTab} onClick={onClick}>
          Выход
        </p>
        <p className={style.profileDescription}>
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <div>
        <form className={style.boxInputs} onSubmit={saveUserData}>
          <div className={style.mbInput}>
            <Input
              icon={"EditIcon"}
              onChange={(e) => setName(e.target.value)}
              value={nameInput}
              name={"name"}
              placeholder={"Имя"}
            />
          </div>
          <div className={style.mbInput}>
            <Input
              icon={"EditIcon"}
              onChange={(e) => setEmail(e.target.value)}
              value={emailInput}
              name={"login"}
              placeholder={"Логин"}
            />
          </div>
          <div className={style.mbInput}>
            <Input
              icon={"EditIcon"}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type={"password"}
              placeholder={"Пароль"}
            />
          </div>
          <div className={style.buttonBox}>
            {saveOn && <Button>сохранить изменения</Button>}
            {cancelOn && <Button onClick={cancelUserData}>отменить</Button>}
          </div>
        </form>
      </div>
    </section>
  );
};