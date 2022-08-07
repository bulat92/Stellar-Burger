import style from "./inner-feed.module.css";
import { OrderList } from "./order-list/order-list";
import { StatusTableRight } from "./status-table-right/status-table-right";
import { useSelector } from "../../interface-and-types/hooks";

export const InnerFeed = () => {

  const { orders } = useSelector(store => store.wsFeed)

  return (
    <>
      <section className={style.InnerFeed}>
        <OrderList classWidth={style.classWidth} arr={orders}/>
        <StatusTableRight />
      </section>
    </>
  );
};
