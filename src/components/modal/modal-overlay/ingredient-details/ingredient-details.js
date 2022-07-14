import style from './ingredient-details.module.css';
import {ingredientPropType} from '../../../../prop-types';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useMemo } from "react";
import { useParams } from "react-router-dom";

export const IngredientDetails = () => {

    const { ingredients } = useSelector((store) => store.burgers);

    const { id } = useParams();

    const IngredientForDetails = useMemo(() => {
        return ingredients.find((el) => el._id === id);
      },[id, ingredients]);
 
    return(
        <div className={style.IngredientDetails}>
            <img className='mb-4' src={IngredientForDetails.image_large} />
            <p className={style.ingredientName}>{IngredientForDetails.name}</p>
            <div className={style.infoBox}>
                <span><p className={`${style.infoBoxP} mr-5`}>
                    Калории,ккал
                </p>
                <br/>
                <p className="text text_type_digits-default">
                    {IngredientForDetails.calories}
                </p>
                </span>
                <span><p className={`${style.infoBoxP} mr-5`}>
                    Белки, г
                </p>
                <br/>
                <p className="text text_type_digits-default">
                    {IngredientForDetails.proteins}
                </p>
                </span>
                <span><p className={`${style.infoBoxP} mr-5`}>
                    Жиры, г
                </p>
                <br/>
                <p className="text text_type_digits-default">
                    {IngredientForDetails.fat}
                </p>
                </span>
                <span><p className={`${style.infoBoxP}`}>
                    Углеводы, г
                </p>
                <br/>
                <p className="text text_type_digits-default">
                    {IngredientForDetails.carbohydrates}
                </p>
                </span>
            </div>
        </div>
    )
}

/* IngredientDetails.propTypes = {
    details: PropTypes.shape(ingredientPropType.isRequired).isRequired,
}  */ 