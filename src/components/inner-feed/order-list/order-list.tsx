import style from "./order-list.module.css";
import React from "react";
import { OrderListRoundImg } from "./order-list-round-img";
import { ingredientsWS } from "../../../services/action/ws-feed-action";
import { Link, useLocation } from "react-router-dom";

export const OrderList: React.FC<{
  statusSwitch: boolean;
  classWidth: string;
  arr: ingredientsWS[];
}> = ({ classWidth, arr, statusSwitch }): JSX.Element => {
  const location = useLocation();

  const statusText: { [key: string]: string } = {
    pending: "Готовится",
    done: "Выполнен",
    created: "Создан",
  };

  return (
    <section className={style.orderList}>
      {arr.map((el: ingredientsWS, index) => (
        <Link
          to={{ pathname: `/${statusSwitch ? 'profile/orders' : 'feed'}/${el._id}`, state: { background: location } }}
          key={index}
        >
          <div className={`${style.orderCard} mb-5 ${classWidth}`}>
            <div className={style.idAndDate}>
              <p className="text text_type_digits-default mb-5">#{el.number}</p>
              <p className="text text_type_main-default text_color_inactive">
                {/* сегодня,  */}
                {el.updatedAt.replace("T", " ").slice(0, -8)}
              </p>
            </div>
            <p
              className={`text text_type_main-medium ${
                statusSwitch ? "mb-2" : "mb-5"
              }`}
            >
              {el.name}
            </p>
            {statusSwitch && (
              <p
                className={`text text_type_main-small mb-6 ${
                  "done" === el.status ? style.statusOrderColor : ""
                }`}
              >
                {statusText[el.status]}
              </p>
            )}
            <OrderListRoundImg arr={el.ingredients} />
          </div>
        </Link>
      ))}
    </section>
  );
};
