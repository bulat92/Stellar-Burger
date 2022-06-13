import style from "./types-of-ingredients.module.css";
import { forwardRef } from "react";
import { ingredientPropType } from "../../../../prop-types";
import PropTypes from "prop-types";
import { Ingredients } from "./ingredients/ingredients";
 
export const TypesOfIngredients = forwardRef((props, ref) => {
 
  return (
    <div className={style.TypesOfIngredients} id={props.id} ref={ref}>
      <h2 className={style.h2}>{props.children}</h2>

      <div className={style.typesBox}>
        {props.arr.map((el, index) => (
          <Ingredients el={el} key={index}/>
        ))}
      </div>
    </div>
  );
});

TypesOfIngredients.propTypes = {
  arr: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired,
}; 