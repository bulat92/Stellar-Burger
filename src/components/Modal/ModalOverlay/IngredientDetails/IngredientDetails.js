import style from './IngredientDetails.module.css';
import {ingredientPropType} from '../../../../prop-types';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const IngredientDetails = () => {

    const { IngredientDetailsOpen } = useSelector(store => store.burgers);

    return(
        <div className={style.IngredientDetails}>
            <img className='mb-4' src={IngredientDetailsOpen.image_large} />
            <p className={style.ingredientName}>{IngredientDetailsOpen.name}</p>
            <div className={style.infoBox}>
                <span><p className={`${style.infoBoxP} mr-5`}>
                    Калории,ккал
                </p>
                <br/>
                <p className="text text_type_digits-default">
                    {IngredientDetailsOpen.calories}
                </p>
                </span>
                <span><p className={`${style.infoBoxP} mr-5`}>
                    Белки, г
                </p>
                <br/>
                <p className="text text_type_digits-default">
                    {IngredientDetailsOpen.proteins}
                </p>
                </span>
                <span><p className={`${style.infoBoxP} mr-5`}>
                    Жиры, г
                </p>
                <br/>
                <p className="text text_type_digits-default">
                    {IngredientDetailsOpen.fat}
                </p>
                </span>
                <span><p className={`${style.infoBoxP}`}>
                    Углеводы, г
                </p>
                <br/>
                <p className="text text_type_digits-default">
                    {IngredientDetailsOpen.carbohydrates}
                </p>
                </span>
            </div>
        </div>
    )
}

/* IngredientDetails.propTypes = {
    details: PropTypes.shape(ingredientPropType.isRequired).isRequired,
}  */

export default IngredientDetails;