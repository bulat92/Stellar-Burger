import style from "./inner-profile.module.css";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState, useEffect } from "react";
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

  const onClick = (e) => {
    e.preventDefault();
    dispatch(logoutFetch());
  };

  const saveUserData = (e) => {
    console.log('dsd')
    if (password !== "" || nameInput !== name || emailInput !== email) { 
      console.log('2')
      e.preventDefault();
      setSaveOn(false);
      setCancelOn(true);
      if (password !== "") {
        dispatch(profileSaveCancelData(nameInput, emailInput, password));
      } else {
        dispatch(profileSaveCancelData(nameInput, emailInput));
      }
    }
  };

  const cancelUserData = (e) => { 
      e.preventDefault();
      setCancelOn(false);
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