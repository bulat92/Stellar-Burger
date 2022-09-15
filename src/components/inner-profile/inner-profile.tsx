import style from "./inner-profile.module.css";
import { NavLink } from "react-router-dom";
import { logoutFetch } from "../../services/action/logout-action";
import { ProfileForm } from "./profile-form/profile-form";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
import { OrderList } from "../inner-feed/order-list/order-list";
import { useDispatch, useSelector } from "../../interface-and-types/hooks";
import { ProtectedRoute } from "../protected-route/protected-route";
import { FeedOrderView } from "../../pages/feed-order-view";
import { Modal } from "../modal/modal";
import { OrderInfo } from "../modal/modal-overlay/order-info/order-info";

 
export const ProfileInner = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  
  
 
  const { data } = useSelector((store) => store.WSOrders);
  const { orders } = useSelector((store) => store.wsFeed);

  const location = useLocation<{ background: Location }>();
  const background = location.state && location.state.background;

  const logout = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(logoutFetch());
  };

  const onClose = () => {
    history.goBack();
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
        <Switch>
          <ProtectedRoute path="/profile" exact={true}>
            <ProfileForm />
          </ProtectedRoute>
          <ProtectedRoute path="/profile/orders/:id" exact={true}>
            <FeedOrderView arr={data} />
          </ProtectedRoute>

          <Route path="/feed/:id" exact={true}>
            <FeedOrderView arr={orders} />
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
