import style from "./types-of-ingredients.module.css";
import { forwardRef } from "react"; 
import { Ingredients } from "./ingredients/ingredients";
import { IIngredient } from '../../../interface-and-types/interface'

interface ITypesOfIngredients {
  children: string;
  id: string;
  arr: IIngredient[];
  ref: any
}

 
export const TypesOfIngredients = forwardRef<HTMLHeadingElement, ITypesOfIngredients>(({children, id, arr}, ref) => {
 
  return (
    <div className={style.TypesOfIngredients} id={id} ref={ref}>
      <h2 className={style.h2}>{children}</h2>

      <div className={style.typesBox}>
        { arr.map((el:  IIngredient, index:  number) => (
          <Ingredients el={el} key={index} />
        ))}
      </div>
    </div>
  );
}); 