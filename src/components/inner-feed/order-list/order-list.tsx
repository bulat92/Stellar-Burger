import style from "./order-list.module.css";
import React from "react";
import { OrderListRoundImg } from "./order-list-round-img";
import { ingredientsWS } from "../../../services/action/ws-feed-action";
import { Link, useLocation } from "react-router-dom";

export const OrderList: React.FC<{
  classWidth: string;
  arr: ingredientsWS[];
}> = ({ classWidth, arr }): JSX.Element => {
  const location = useLocation();

  return (
    <section className={style.orderList}>
      {arr.map((el: ingredientsWS, index) => (
        <Link
          to={{ pathname: `/feed/${el._id}`, state: { background: location } }}
        >
          <div className={`${style.orderCard} mb-5 ${classWidth}`} key={index}>
            <div className={style.idAndDate} key={index}>
              <p className="text text_type_digits-default mb-5">#{el.number}</p>
              <p className="text text_type_main-default text_color_inactive">
                {/* сегодня,  */}
                {el.updatedAt.replace("T", " ").slice(0, -8)}
              </p>
            </div>
            <p className="text text_type_main-medium mb-5">{el.name}</p>
            <OrderListRoundImg arr={el.ingredients} />
          </div>
        </Link>
      ))}
    </section>
  );
};
