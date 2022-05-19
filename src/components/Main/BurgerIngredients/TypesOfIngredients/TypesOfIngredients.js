import style from "./TypesOfIngredients.module.css";
import React from 'react';
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {ingredientPropType} from '../../../../prop-types'
import PropTypes from 'prop-types';
/* import {Counter} from '@ya.praktikum/react-developer-burger-ui-components'; */



const TypesOfIngredients = props => {
 
    return(
        <div className={style.TypesOfIngredients}>
            <h2 className={style.h2}>
                {props.children}
            </h2>
            
            <div className={style.typesBox}>
                {props.arr.map(el=>(
                    <div key={el._id} className={style.type}>
                        {/* <Counter className={style.Counter} count={1} size="small" /> */}
                        <img className={style.typesImg} src={el.image_mobile} alt="" />
                        <div className={style.priceBox}>
                            <p className='text text_type_digits-default mr-2'>{el.price}</p>
                            <CurrencyIcon className={style.CurrencyIcon} type="primary" />
                        </div>
                        <p className={style.typeName}>{el.name}</p>
                    </div>
                    
                ))} 
            </div>
        </div>
    );
};

TypesOfIngredients.propTypes = {
    arr: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired,
} 

export default TypesOfIngredients;
