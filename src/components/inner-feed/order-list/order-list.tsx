import style from "./order-list.module.css";
import { Cost } from "../../cost/cost";
import React from "react";

export const OrderList: React.FC<{classWidth: string}> = ({classWidth}): JSX.Element => {
  return (
    <section className={style.orderList}>
      <div className={`${style.orderCard} mb-5 ${classWidth}`}>
        <div className={style.idAndDate}>
          <p className="text text_type_digits-default mb-5">#316495</p>
          <p className="text text_type_main-default text_color_inactive">
            сегодня, 16:20 i-GMT+3
          </p>
        </div>
        <p className="text text_type_main-medium mb-5">
          Name of ordered burger
        </p>
        <div className={style.imageIngredientsAndCostBox}>
          <div className={`${style.roundImagesBOX} mr-5`}>
            <div style={{ zIndex: "10" }} className={style.roundImagesBorder}>
              <div
                className={style.roundImages}
                style={{
                  zIndex: "10",
                  backgroundImage:
                    "url(https://code.s3.yandex.net/react/code/bun-02-mobile.png  )",
                }}
              ></div>
            </div>
            <div style={{ zIndex: "9" }} className={style.roundImagesBorder}>
              <div
                className={style.roundImages}
                style={{
                  zIndex: "9",
                  backgroundImage:
                    "url(https://code.s3.yandex.net/react/code/meat-03-mobile.png )",
                }}
              ></div>
            </div>
            <div style={{ zIndex: "8" }} className={style.roundImagesBorder}>
              <div
                className={style.roundImages}
                style={{
                  zIndex: "8",
                  backgroundImage:
                    "url(https://code.s3.yandex.net/react/code/meat-01-mobile.png )",
                }}
              ></div>
            </div>
            <div style={{ zIndex: "7" }} className={style.roundImagesBorder}>
              <div
                className={style.roundImages}
                style={{
                  zIndex: "7",
                  backgroundImage:
                    "url(https://code.s3.yandex.net/react/code/sauce-04-mobile.png)",
                }}
              ></div>
            </div>
          </div>
          <Cost cost={450} />
        </div>
      </div>
    </section>
  );
};
