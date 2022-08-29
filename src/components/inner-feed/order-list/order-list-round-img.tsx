import style from "./order-list.module.css";
import { Cost } from "../../cost/cost";
import { useSelector } from "../../../interface-and-types/hooks";
import React from "react";

export const OrderListRoundImg: React.FC<{ arr: string[] }> = ({ arr }) => {
  const ordersImg: string[] = [];
  let orderTotal: number = 0;

  const { ingredients } = useSelector((store) => store.burgers);

  arr.forEach((elOrder) => {
    ingredients.forEach((element) => {
      if (element._id === elOrder) {
        if (!ordersImg.includes(element.image_mobile)) {
          ordersImg.push(element.image_mobile);
        }
        orderTotal = orderTotal + element.price;
      }
    });
  });

  return (
    <div className={style.imageIngredientsAndCostBox}>
      <div className={`${style.roundImagesBOX} mr-5`}>
        {ordersImg.map((el, index) => (
          <div
            style={{ zIndex: `${20 - index}` }}
            className={style.roundImagesBorder}
            key={index}
          >
            <div
              className={style.roundImages}
              style={{
                zIndex: "10",
                backgroundImage: `url(${el})`,
              }}
            ></div>
          </div>
        ))}
      </div>
      <Cost cost={orderTotal} />
    </div>
  );
};
