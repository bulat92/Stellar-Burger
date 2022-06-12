import style from './OrderDetails.module.css';
import PropTypes from 'prop-types';
import {ingredientPropType} from '../../../../prop-types';
import CheckMarImg from '../../../../img/CheckMarImg.png';
import { useSelector } from 'react-redux';


const OrderDetails = () => {

    const { orderNumber } = useSelector(store => store.orderedIngredientsValues)

    return(
        <div className={style.OrderDetails}>
            <p className={`${style.numberOrder} text text_type_digits-large`}>{orderNumber}</p>
            <p className={`${style.underOrderText} text text_type_main-medium`}>идентификатор заказа</p>
            <img src={CheckMarImg} className={style.CheckMarImg} alt='CheckMarImg'/>
            <p className={`${style.yourOrder} mb-2 text text_type_main-medium`}>Ваш заказ начали готовить</p>
            <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
        </div>
    )
}

/* OrderDetails.propTypes = {
    orderInfo: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired,
}  */

export default OrderDetails;