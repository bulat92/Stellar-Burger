import style from "./order-info.module.css";
import React from "react";
import { Cost } from "../../../cost/cost";
import { IIngredient } from "../../../../interface-and-types/interface";

export const Check: React.FC<{
  urlImg: string;
  index: number;
  arr: IIngredient[];
}> = ({ urlImg, index, arr }) => {
  const count = () => {
    let count: number = 0;
    arr.forEach((el) => {
      if (el.image_mobile === urlImg) {
        count++;
      }
    });
    return count;
  };

  const el = arr.find((el) => el.image_mobile === urlImg);

  return (
    <>{el ? (<div className={`mb-4 mr-6 ml-5 ${style.oneIngredientBox}`}>
      <div className={style.roundImagesAndNameBox}>
        <div
          style={{ zIndex: `${20 - index}` }}
          className={`${style.roundImagesBorder} mr-4`}
          key={index}
        >
          <div
            className={style.roundImages}
            style={{
              backgroundImage: `url(${urlImg})`,
            }}
          ></div>
        </div>
        <p className="text text_type_main-default">{el.name}</p>
      </div>
      <div className={style.costAndCountBox}>
        <pre className={`text text_type_digits-default ${style.costAndCountBox}`}>{count()} x </pre>
        <Cost cost={el.price} />
      </div>
    </div>) : ''}</>
  );
};
