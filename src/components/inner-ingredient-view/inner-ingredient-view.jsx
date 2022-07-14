import style from "./inner-ingredient-view.module.css";
import { IngredientDetails } from "../modal/modal-overlay/ingredient-details/ingredient-details";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useMemo, useEffect } from "react";
import { fetchGetIngredients } from "../../services/action/burger-ingredients";

export const InnerIngredientView = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetIngredients());
  }, [dispatch]);

  const { ingredients } = useSelector((store) => store.burgers);

  const content = useMemo(() => {
    let IngredientForDetails = false;

    if (ingredients) {
      IngredientForDetails = ingredients.find((el) => el._id === id);
 
    }

    return IngredientForDetails;
  }, [id, ingredients]);

  return (
    <section className={style.InnerIngredientView}>
      <div className={style.Modal}>
        <div className={style.modalHeader}>
          <h2 className={style.h2}>Детали ингредиента</h2>
        </div>
        {content && <IngredientDetails IngredientForDetails={content} />}
      </div>
    </section>
  );
};
