import style from "./inner-feed.module.css";
import { OrderList } from "./order-list/order-list";
import { StatusTableRight } from "./status-table-right/status-table-right";

export const InnerFeed = () => {
  return (
    <>
      <section className={style.InnerFeed}>
        <OrderList classWidth={style.classWidth} />
        <StatusTableRight />
      </section>
    </>
  );
};
