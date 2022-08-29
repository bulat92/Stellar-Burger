import style from "./order-info.module.css";
import { useSelector } from "../../../../interface-and-types/hooks";
import { useParams } from "react-router-dom";
import { useMemo } from "react";
import { Cost } from "../../../cost/cost";
import { Check } from "./check";
import { IIngredient } from '../../../../interface-and-types/interface';
import { ingredientsWS } from '../../../../services/action/ws-feed-action';
import React from 'react';

export const OrderInfo: React.FC<{arr: ingredientsWS[]}> = ({arr}): JSX.Element => {
  const { id }: any = useParams();
 
  const { ingredients } = useSelector((store) => store.burgers);

  const orderForInfo = useMemo(() => {
    return arr.find((el) => el._id === id);
  }, [id, arr]);

  const status = () => {
    let orderStatus;
    if (orderForInfo) {
      if (orderForInfo.status === "done") {
        orderStatus = "Выполнен";
      } else {
        orderStatus = "В работе ";
      }
    }
    return orderStatus;
  };

  const ordersImg: string[] = [];
  const allOrderIngredients: IIngredient[] = [];
  let orderTotal: number = 0;

  if (orderForInfo) {
    orderForInfo.ingredients.forEach((elOrder) => {
      ingredients.forEach((element) => {
        if (element._id === elOrder) {
          if (!ordersImg.includes(element.image_mobile)) {
            ordersImg.push(element.image_mobile);
          }
          allOrderIngredients.push(element);
          orderTotal = orderTotal + element.price;
        }
      });
    });
  }

  return (
    <>
      {orderForInfo ? (
        <div className={style.orderForInfo}>
          <p
            className={`text text_type_digits-default mb-10 ${style.headerNumber}`}
          >
            #{orderForInfo.number}
          </p>
          <p className="text text_type_main-medium mb-3">{orderForInfo.name}</p>
          <p className={`text text_type_main-medium  mb-15 ${style.status}`}>
            {status()}
          </p>
          <p className="text text_type_main-medium mb-6">Состав:</p>
          <div className={`${style.roundImagesAndCostBox} mb-10`}>
            {ordersImg.map((el, index) => ( 
              <Check urlImg={el} index={index} key={index} arr={allOrderIngredients}/>
            ))}
          </div>

          <div className={style.dataAndTotalBox}>
            <p className="text text_type_main-default text_color_inactive">
              {/* сегодня,  */}
              {orderForInfo.updatedAt.replace("T", " ").slice(0, -8)}
            </p>
            <Cost cost={orderTotal} />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
