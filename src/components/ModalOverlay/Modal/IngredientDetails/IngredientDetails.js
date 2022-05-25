import style from './IngredientDetails.module.css';

const IngredientDetails = (props) => {
    return(
        <div className={style.IngredientDetails}>
            <img className='mb-4' src={props.details.image_large} />
            <p className={style.ingredientName}>{props.details.name}</p>
            <div className={style.infoBox}>
                <span><p className={`${style.infoBoxP} mr-5`}>
                    Калории,ккал
                </p>
                <br/>
                <p className="text text_type_digits-default">
                    {props.details.calories}
                </p>
                </span>
                <span><p className={`${style.infoBoxP} mr-5`}>
                    Белки, г
                </p>
                <br/>
                <p className="text text_type_digits-default">
                    {props.details.proteins}
                </p>
                </span>
                <span><p className={`${style.infoBoxP} mr-5`}>
                    Жиры, г
                </p>
                <br/>
                <p className="text text_type_digits-default">
                    {props.details.fat}
                </p>
                </span>
                <span><p className={`${style.infoBoxP}`}>
                    Углеводы, г
                </p>
                <br/>
                <p className="text text_type_digits-default">
                    {props.details.carbohydrates}
                </p>
                </span>
            </div>
        </div>
    )
}

export default IngredientDetails;