import style from "./status-table-right.module.css";
import { useSelector } from "../../../interface-and-types/hooks";
import { useMemo } from "react";
import { Preloader } from "../../preloader/preloader";

export const StatusTableRight = () => {
  const { orders, total, totalToday } = useSelector((store) => store.wsFeed);

  const columnLimit = 28;

  const readyOrders = useMemo(() => {
    return orders.filter((el) => el.status === "done");
  }, [orders]).slice(0, columnLimit);
  const inWorkOrders = useMemo(() => {
    return orders.filter((el) => el.status !== "done");
  }, [orders]).slice(0, 7);

  return (
    <section className={style.StatusTableRight}>
      {orders.length !== 0 ? (<> <div className={style.ordersStatusBox}>
        <div className={`${style.ready} mb-5`}>
          <p className="text text_type_main-medium mb-5">Готовы:</p>
          <div className={style.listReady}>
            {readyOrders.map((el, index) => (
              <p className="text text_type_digits-default mb-2" key={index}>
                {el.number}
              </p>
            ))}
          </div>
        </div>
        <div className={`${style.inWork} mb-5`}>
          <p className="text text_type_main-medium mb-5">В работе:</p>
          <div className="listInWork">
            {inWorkOrders.map((el, index) => (
              <p className="text text_type_digits-default mb-2" key={index}>
                {el.number}
              </p>
            ))}
          </div>
        </div>
      </div>
      <p className="text text_type_main-medium">Выполнено за все время:</p>
      <p className="text text_type_digits-large mb-15">{total}</p>
      <p className="text text_type_main-medium">Выполнено за сегодня:</p>
      <p className="text text_type_digits-large">{totalToday}</p></> ) : <Preloader/>}
    </section>
  );
};
