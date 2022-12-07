import style from "../inner-profile.module.css";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { profileSaveCancelData } from "../../../services/action/profile-action";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "../../../interface-and-types/hooks";

export const ProfileForm = () => {
  const { name, email } = useSelector((store) => store.login);

  const dispatch = useDispatch();

  const [password, setPassword] = useState<string>("");
  const [nameInput, setName] = useState<string>(name);
  const [emailInput, setEmail] = useState<string>(email);
  const [saveOn, setSaveOn] = useState<boolean>(false);
  const [cancelOn, setCancelOn] = useState<boolean>(false);

  const saveUserData = (e: React.SyntheticEvent) => {
    if (password !== "" || nameInput !== name || emailInput !== email) {
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

  const cancelUserData = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setCancelOn(false);
    dispatch(profileSaveCancelData(name, email));
    setName(name);
    setEmail(email);
  };

useEffect(() => {
     setName(name)
     setEmail(email)
  }, [name, email]);

  useEffect(() => {
    if (password !== "" || nameInput !== name || emailInput !== email) {
      setSaveOn(true);
    } else {
      setSaveOn(false);
    }
  }, [password, nameInput, emailInput, name, email]);

  return (
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
  );
};
