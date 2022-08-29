import style from "./inner-order.module.css";
import { NavLink } from "react-router-dom";
import { logoutFetch } from "../../services/action/logout-action";
import { useDispatch, useSelector } from "../../interface-and-types/hooks";
import { OrderList } from "../inner-feed/order-list/order-list";

export const InnerOrder = () => {

  const { data } = useSelector((store) => store.WSOrders);
  
  const dispatch = useDispatch();

  const onClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(logoutFetch());
  };

  return (
    <section className={style.InnerOrder}>
      <div className={style.boxTabs}>
        <NavLink
          exact
          activeClassName={style.profileTabActive}
          to="/profile"
          className={style.profileTab}
        >
          Профиль
        </NavLink>
        <NavLink
          exact
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
          В этом разделе вы можете просмотреть свою историю заказов
        </p>
      </div>
      <OrderList classWidth={style.classWidth} arr={data} statusSwitch={true}/>
    </section>
  );
};
