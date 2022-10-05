import style from "./inner-profile.module.css";
import { NavLink } from "react-router-dom";
import { logoutFetch } from "../../services/action/logout-action";
import { ProfileForm } from "./profile-form/profile-form";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
import { OrderList } from "../inner-feed/order-list/order-list";
import { useDispatch, useSelector } from "../../interface-and-types/hooks";
import { ProtectedRoute } from "../protected-route/protected-route";
import { ProfileOrdersView } from "../../pages/profile-orders-view";
import { Modal } from "../modal/modal";
import { OrderInfo } from "../modal/modal-overlay/order-info/order-info";
import { useMemo } from "react";

 
export const ProfileInner = () => {
  const dispatch = useDispatch();
  const history = useHistory();
   
  const { data } = useSelector((store) => store.WSOrders);

  const location = useLocation<{ background: Location }>();
  const background = location.state && location.state.background;

  const logout = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(logoutFetch());
  };

  const onClose = () => {
    history.goBack();
  };

  const descriptionPage = useMemo(() => {

    let description: string = '';

    if (history.location.pathname === "/profile/orders") {
      description = 'В этом разделе вы можете посмотреть свою историю заказов'
    }else{
      description = 'В этом разделе вы можете изменить свои персональные данные'
    }
    return description
  },[history.location.pathname])


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
          {descriptionPage}
        </p>
      </div>
      <div>
        <Switch>
          <ProtectedRoute path="/profile" exact={true}>
            <ProfileForm />
          </ProtectedRoute>
          <ProtectedRoute path="/profile/orders/:id" exact={true}>
            <ProfileOrdersView/>
          </ProtectedRoute>

          <Route path="/feed/:id" exact={true}>
            <ProfileOrdersView/>
          </Route>
          <ProtectedRoute path="/profile/orders" exact={true}>
            <OrderList
              classWidth={`${style.classWidth} mr-2`}
              arr={data}
              statusSwitch={true}
            />
          </ProtectedRoute>
        </Switch>
        {background && (
          <Switch>
            <ProtectedRoute path="/profile/orders/:id" exact={true}>
              <Modal onClose={onClose} children={<OrderInfo arr={data} />} />
            </ProtectedRoute>
          </Switch>
        )}
      </div>
    </section>
  );
};
