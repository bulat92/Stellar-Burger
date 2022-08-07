import style from "./inner-ingredient-view.module.css";
import { IngredientDetails } from "../modal/modal-overlay/ingredient-details/ingredient-details";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "../../interface-and-types/hooks";
import { useMemo, useEffect } from "react";
import { fetchGetIngredients } from "../../services/action/burger-ingredients";
import { IIngredient } from '../../interface-and-types/interface';

export const InnerIngredientView = () => {
  const { id } = useParams<any>();
 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetIngredients());
  }, [dispatch]);

  const { ingredients } = useSelector((store: any) => store.burgers);

  const content = useMemo(() => {
    let IngredientForDetails = false;

    if (ingredients) {
      ingredients.forEach((el: IIngredient) => {
        if(el._id === id){
          IngredientForDetails =  true;
      }});

    } 
    
    return IngredientForDetails;
  }, [id, ingredients]);

  return (
    <section className={style.InnerIngredientView}>
      <div className={style.Modal}>
        <div className={style.modalHeader}>
          <h2 className={style.h2}>Детали ингредиента</h2>
        </div>
        {content && <IngredientDetails/>}
      </div>
    </section>
  );
};
