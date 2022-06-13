import style from "./Ingredients.module.css";
import { SET_INGREDIENTS_FOR_DETAILS } from "../../../../../services/action/burgerIngredients";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "react-redux";
import { useDrag } from "react-dnd";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { useMemo } from "react";
import { useSelector } from "react-redux";

export const Ingredients = ({ el }) => {
  const { OrderIngredients, bun } = useSelector(
    (store) => store.burgerConstructorValues
  );
  const dispatch = useDispatch();

  const ingredientsCount = useMemo(() => {
    let count = 0;

    if(el.type !== 'bun'){
      OrderIngredients.map((OrIn) => {
        if (OrIn._id === el._id) {
          ++count;
        }
      });
    }else{
      if(bun._id === el._id){
        return count += 2;
      }
    }
    return count;
  }, [OrderIngredients, bun]);

  const [, ref] = useDrag({
    type: "ingredients",
    item: el,
  });

  return (
    <div
      className={style.type}
      ref={ref} 
      onClick={() => {
        dispatch({
          type: SET_INGREDIENTS_FOR_DETAILS,
          details: el,
        });
      }}
    >
      {ingredientsCount > 0 && (
        <Counter
          className={style.Counter}
          count={ingredientsCount}
          size="small"
        />
      )}
      <img className={style.typesImg} src={el.image_mobile} alt="" />
      <div className={style.priceBox}>
        <p className="text text_type_digits-default mr-2">{el.price}</p>
        <CurrencyIcon className={style.CurrencyIcon} type="primary" />
      </div>
      <p className={style.typeName}>{el.name}</p>
    </div>
  );
};
