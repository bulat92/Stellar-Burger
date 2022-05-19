import React from "react";
import style from "./Main.module.css";
import {arr} from '../utils/data';
import BurgerConstructor from './BurgerConstructor/BurgerConstructor';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'
import PropTypes from 'prop-types';
import {ingredientPropType} from '../../prop-types'

const Main = () =>{
      return (
        <main style={style.main}>
            <BurgerIngredients arr = {arr}/>
            <BurgerConstructor />
        </main>
      );
}
 
BurgerIngredients.propTypes = {
  arr: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired,
} 

export default Main;