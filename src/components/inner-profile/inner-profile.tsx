import style from "./inner-profile.module.css";
import { NavLink } from "react-router-dom";
import { logoutFetch } from "../../services/action/logout-action";
import { useDispatch } from "react-redux";
import { ProfileForm } from "./profile-form/profile-form";

export const ProfileInner = () => {
  const dispatch = useDispatch();

  const logout = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(logoutFetch());
  };

  return (
    <section className={style.ProfileInner}>
      <div className={style.boxTabs}>
        <NavLink
          exact={true}
          to="/profile"
          activeClassName={style.profileTabActive}
          className={style.profileTab}
        >
          Профиль
        </NavLink>
        <NavLink
          exact={true}
          activeClassName={style.profileTabActive}
          to="/profile/orders"
          className={style.profileTab}
        >
          Историй заказов
        </NavLink>
        <p className={style.profileTab} onClick={logout}>
          Выход
        </p>
        <p className={style.profileDescription}>
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <div>
        <ProfileForm />
      </div>
    </section>
  );
};
