import style from "./status-table-right.module.css";
import { useSelector } from "../../../interface-and-types/hooks";

export const StatusTableRight = () => {

  const { orders, total, totalToday } = useSelector(store => store.wsFeed)

  const readyOrders = orders.filter(el => el.status === 'done');
  const inWorkOrders = orders.filter(el => el.status !== 'done');

  return (
    <section className={style.StatusTableRight}>
      <div className={style.ordersStatusBox}>
        <div className={`${style.ready} mb-5`}>
          <p className="text text_type_main-medium mb-5">Готовы:</p>
          <div className="listReady">
            {readyOrders.map( (el, index) => (<p className="text text_type_digits-default mb-2" key={index}>{el.number}</p>))} 
          </div>
        </div>
        <div className={`${style.inWork} mb-5`}>
          <p className="text text_type_main-medium mb-5">В работе:</p>
          <div className="listInWork">
            {inWorkOrders.map( (el, index) => (<p className="text text_type_digits-default mb-2" key={index}>{el.number}</p>))}
          </div>
        </div>
      </div>
      <p className="text text_type_main-medium">Выполнено за все время:</p>
      <p className="text text_type_digits-large mb-15">{total}</p>
      <p className="text text_type_main-medium">Выполнено за сегодня:</p>
      <p className="text text_type_digits-large">{totalToday}</p>

    </section>
  );
};
