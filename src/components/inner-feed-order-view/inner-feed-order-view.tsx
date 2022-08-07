import { OrderInfo } from "../modal/modal-overlay/order-info/order-info";
import style from './inner-feed-order-view.module.css';

export const InnerFeedOrderView = () => {
  return (
    <section className={style.InnerFeedOrderView}>
      <OrderInfo />
    </section>
  );
};
