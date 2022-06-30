import style from "./inner-profile.module.css";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState, useCallback, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { logoutFetch } from "../../services/action/logout-action";
import { profileSaveCancelData } from "../../services/action/profile-action";
import { useDispatch, useSelector } from "react-redux";

export const ProfileInner = () => {
  const { name, email } = useSelector((store) => store.login);

  const dispatch = useDispatch();

  const [password, setPassword] = useState("");
  const [nameInput, setName] = useState(name);
  const [emailInput, setEmail] = useState(email);
  const [saveOn, setSaveOn] = useState(false);
  const [cancelOn, setCancelOn] = useState(false);

  const onClick = useCallback((e) => {
    e.preventDefault();
    dispatch(logoutFetch());
  }, []);

  const changeUserData = useCallback((e) => {
    e.preventDefault();
    setSaveOn(false);
    setCancelOn(true);
    if (password !== "") {
      dispatch(profileSaveCancelData(nameInput, emailInput, password));
    }else{
      dispatch(profileSaveCancelData(nameInput, emailInput));
    }
  }, [emailInput, nameInput, password]);

  const cancelUserData = useCallback((e) => {
    e.preventDefault();
    setCancelOn(false);
    dispatch(profileSaveCancelData(name, email));
    
  }, [email, name]);


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
      <form className={style.boxInputs}>
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
          {saveOn && (
            <Button onClick={changeUserData}>сохранить изменения</Button>
          )}
          {cancelOn && <Button onClick={cancelUserData}>отменить</Button>}
        </div>
      </form>
    </section>
  );
};
