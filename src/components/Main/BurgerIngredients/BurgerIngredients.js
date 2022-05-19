import { useState } from "react";
import style from "./BurgerIngredients.module.css";
import TypesOfIngredients from "./TypesOfIngredients/TypesOfIngredients";
import TypesList from "./TypesList/TypesList";
import PropTypes from 'prop-types';
import {ingredientPropType} from '../../../prop-types';
import {littleProps} from '../../../little-props';

const BurgerIngredients = (props) => {

    const [arrOfTypes, setArrOfTypes] = useState([{
        'id': 0,
        'nameRu': 'Булки',
        'name':'bun'},
        {
        'id': '1',
        'nameRu': 'Соусы',
        'name':'sauce'},
        {
        'id': '2',
        'nameRu': 'Начинки',
        'name':'main'}]);
 
    return(
        <section>
            <TypesList list={arrOfTypes}/>
            <section className={style.BurgerIngredients}>
                <TypesOfIngredients arr={props.arr.filter(el => {if(el.type == 'bun') return el})}>
                    Булки
                </TypesOfIngredients>
                <TypesOfIngredients arr={props.arr.filter(el => {if(el.type == 'sauce') return el})}>
                    Соусы
                </TypesOfIngredients>
                <TypesOfIngredients arr={props.arr.filter(el => {if(el.type == 'main') return el})}>
                    Начинки
                </TypesOfIngredients>
            </section>
        </section>
    );
}
BurgerIngredients.propTypes = {
    arr: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired,
} 

 
 
export default BurgerIngredients;