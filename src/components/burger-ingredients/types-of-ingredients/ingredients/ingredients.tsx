import style from "./ingredients.module.css";
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components"; 
import { useDrag } from "react-dnd";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { IIngredient } from '../../../../interface/interface';
import { FC } from 'react';

export const Ingredients: FC<{el: IIngredient}> = ({ el }) => {

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

  const [, ref] = useDrag({
    type: "ingredients",
    item: el,
  });

  return (
    <Link to={{ pathname: `/ingredients/${el._id}`, state: {background: location} }}>
      <div
        className={style.type}
        ref={ref}
      >
        {ingredientsCount > 0 && (
          <Counter 
            count={ingredientsCount}
            size="small"
          />
        )}
        <img className={style.typesImg} src={el.image_mobile} alt="" />
        <div className={style.priceBox}>
          <p className="text text_type_digits-default mr-2">{el.price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <p className={style.typeName}>{el.name}</p>
      </div>
    </Link>
  );
};
