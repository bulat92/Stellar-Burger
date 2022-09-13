import style from "./ingredients.module.css";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components"; 
import { useDrag } from "react-dnd";
import { useMemo, useEffect } from "react";
import { useSelector } from "../../../../interface-and-types/hooks";
import { Link, useLocation } from "react-router-dom";
import { IIngredient } from '../../../../interface-and-types/interface';
import { FC } from 'react';
import { Cost } from "../../../cost/cost";
import { getEmptyImage } from 'react-dnd-html5-backend';


export const Ingredients: FC<{el: IIngredient, dataTestText: string, index: number }> = ({ el, dataTestText, index }) => {

  const location = useLocation();

  const { OrderIngredients, bun } = useSelector(
    (store: any) => store.burgerConstructorValues
  ); 
  const ingredientsCount = useMemo(() => {
    let count = 0;

    if (el.type !== "bun") {
      OrderIngredients.map((OrIn: IIngredient) => {
        if (OrIn._id === el._id) {
          ++count;
        }
      });
    } else {
      if (bun._id === el._id) {
        return (count += 2);
      }
    }
    return count;
  }, [OrderIngredients, bun]);

  const [, ref, preview] = useDrag({
    type: "ingredients",
    item: el,
  });

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true })
  }, [preview])

  return (
    <Link  to={{ pathname: `/ingredients/${el._id}`, state: {background: location} }}>
      <div
        className={style.type}
        ref={ref}
        data-test={dataTestText}
        data-test-drag={`${dataTestText}${index}`}
      >
        {ingredientsCount > 0 && (
          <Counter 
            count={ingredientsCount}
            size="small"
          />
        )}
        <img className={style.typesImg} src={el.image_mobile} alt="" />
        <div className={style.priceBox}>
          < Cost cost={el.price} /> 
        </div>
        <p className={style.typeName}>{el.name}</p>
      </div>
    </Link>
  );
};
