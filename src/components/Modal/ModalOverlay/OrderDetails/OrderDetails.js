import style from './OrderDetails.module.css';
import {CheckMarkIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import {ingredientPropType} from '../../../../prop-types';

const OrderDetails = () => {
    return(
        <div className={style.OrderDetails}>
            <p className={`${style.numberOrder} text text_type_digits-large`}>034536</p>
            <p className={`${style.underOrderText} text text_type_main-medium`}>идентификатор заказа</p>
            <CheckMarkIcon type="primary" />
            <p className={`${style.yourOrder} mb-2 text text_type_main-medium`}>Ваш заказ начали готовить</p>
            <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
        </div>
    )
}

OrderDetails.propTypes = {
    arr: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired,
} 

export default OrderDetails;