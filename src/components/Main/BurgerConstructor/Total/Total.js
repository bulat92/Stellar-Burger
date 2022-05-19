import React from 'react';
import style from './Total.module.css'
import {Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';

const Total = (props) => {
    return(
        <div className={`${style.Total}`}>
            <div className={`${style.priceBox}`}>
                <p className="text text_type_digits-medium mr-2">{props.totalNumber}</p>
                <CurrencyIcon type="primary" />
            </div> 
            <Button>
                <pre>Оформить заказ</pre>
            </Button>
        </div>
    )
}

export default Total;