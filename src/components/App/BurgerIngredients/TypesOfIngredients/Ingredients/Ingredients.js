import style from "./Ingredients.module.css";
import { SET_INGREDIENTS_FOR_DETAILS } from "../../../../../services/action/burgerIngredients";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from 'react-redux';
import { useDrag } from 'react-dnd';
import {Counter} from '@ya.praktikum/react-developer-burger-ui-components';

export const Ingredients = ({ el, key }) => {
    
const dispatch = useDispatch();
 
const [, ref] = useDrag({
  type: 'ingredients',
  item: el,
})

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
      {/* <Counter className={style.Counter} count={} size="small" /> */}
      <img className={style.typesImg} src={el.image_mobile} alt="" />
      <div className={style.priceBox}>
        <p className="text text_type_digits-default mr-2">{el.price}</p>
        <CurrencyIcon className={style.CurrencyIcon} type="primary" />
      </div>
      <p className={style.typeName}>{el.name}</p>
    </div>
  );
};
