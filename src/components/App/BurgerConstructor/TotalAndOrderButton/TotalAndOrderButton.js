import React, {useContext} from 'react';
import style from './TotalAndOrderButton.module.css'
import {Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import {littleProps} from '../../../../little-props';
import {BurgerConstructorContext} from '../../BurgerConstructorContext';

const TotalAndOrderButton = () => {

    const   {OrderIngredients, ToggleOrderDetailsModal} = useContext(BurgerConstructorContext),
            priceBun = OrderIngredients.find(el =>{ return el.type === 'bun'}).price,
            totalNumber = OrderIngredients.reduce((sum, el) => sum = Number(el.price) + sum, 0) + Number(priceBun);

    return(
        <div className={`${style.Total}`}>
            <div className={`${style.priceBox}`}>
                <p className="text text_type_digits-medium mr-2">{totalNumber}</p>
                <CurrencyIcon type="primary" />
            </div> 
            <Button onClick={ToggleOrderDetailsModal}>
                <pre>Оформить заказ</pre>
            </Button>
        </div>
    )
}

TotalAndOrderButton.propTypes = {
    props: PropTypes.arrayOf(littleProps)
}

export default TotalAndOrderButton;