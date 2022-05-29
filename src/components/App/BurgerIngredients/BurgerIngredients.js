import { useState, useRef } from "react";
import style from "./BurgerIngredients.module.css";
import TypesOfIngredients from "./TypesOfIngredients/TypesOfIngredients";
import TypesList from "./TypesList/TypesList";
import PropTypes from 'prop-types';
import {ingredientPropType} from '../../../prop-types';

const BurgerIngredients = (props) => {

    const mainSection = useRef(null);
 
    const [tabList, setTabList] = useState([{
    'id': '0',
    'nameRu': 'Булки',
    'name':'bun',
    'coordinates' : 0},
    {
    'id': '1',
    'nameRu': 'Соусы',
    'name':'sauce',
    'coordinates' : 200},
    {
    'id': '2',
    'nameRu': 'Начинки',
    'name':'main',
    'coordinates' : 400}]);

    const recordcoordinates = (name, value) =>{

         const index = tabList.findIndex( tab => tab.nameRu === name);

         if(index === -1) {
             return
         }
         
        tabList[index].coordinates = value;
        setTabList(tabList);
    }

    const sectuionScrollFunc = () => {
        mainSection.scrollIntoView({ behavior: "smooth" })
    }

 
    return(
        <section>
            <TypesList tabList={tabList} />
            <section className={style.BurgerIngredients} ref={mainSection}>
                {tabList.map((tab, index) => (
                    <TypesOfIngredients recordcoordinates={recordcoordinates} key={index} onClick={props.onClick}  arr={props.arr.filter(el => {if(el.type === tab.name) return el})}>
                        {tab.nameRu}
                    </TypesOfIngredients>
                ))}
            </section>
        </section>
    );
}
BurgerIngredients.propTypes = {
    arr: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired,
} 

 
 
export default BurgerIngredients;