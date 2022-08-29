import { OrderInfo } from "../modal/modal-overlay/order-info/order-info";
import style from './inner-feed-order-view.module.css';
import { ingredientsWS } from '../../services/action/ws-feed-action';
import React from 'react';

export const InnerFeedOrderView: React.FC<{arr: ingredientsWS[]}> = ({arr}) => {
  return (
    <section className={style.InnerFeedOrderView}>
      {arr && <OrderInfo arr={arr}/>}
    </section>
  );
};
