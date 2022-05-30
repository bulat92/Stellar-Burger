import { useState, useRef, useEffect } from "react";
import style from "./BurgerIngredients.module.css";
import TypesOfIngredients from "./TypesOfIngredients/TypesOfIngredients";
import TypesList from "./TypesList/TypesList";
import PropTypes from 'prop-types';
import {ingredientPropType} from '../../../prop-types';
import { useInView } from 'react-intersection-observer';


const BurgerIngredients = (props) => {

    const mainSection = useRef(null);
    const [currentTab, setCurrentTab] = useState('bun');
 
    const [tabList, setTabList] = useState([{
    'id': '0',
    'nameRu': 'Булки',
    'name':'bun',
    'start' : 0},
    {
    'id': '1',
    'nameRu': 'Соусы',
    'name':'sauce',
    'start' : 0},
    {
    'id': '2',
    'nameRu': 'Начинки',
    'name':'main',
    'start' : 0}]);
 
    const sectuionScrollFunc = (id) => { 
        console.log(id)
        id = tabList.find((el) => { return el.nameRu === id }).name
        console.log(id)
        const element = document.getElementById(id);
         
        if(element){
            element.scrollIntoView({behavior: "smooth" });
        }
    }
  


    const [bunsRef, inViewBuns] = useInView({
        threshold: 0.8,
    });
    const [saucesRef, inViewSauces] = useInView({
        threshold: 0.6,
    });
    const [mainsRef, inViewFilling] = useInView({
      threshold: 0.2,
    });
   
    useEffect(() => {
      if (inViewBuns) {
        setCurrentTab("bun");
      } else if (inViewSauces) {
        setCurrentTab("sauce");
      } else if (inViewFilling) {
        setCurrentTab("main");
      }
    }, [inViewBuns, inViewFilling, inViewSauces]);


    return(
        <section> 
            <TypesList tabList={tabList} sectuionScrollFunc={sectuionScrollFunc} currentTab={currentTab} />
            <section className={style.BurgerIngredients} ref={mainSection}>
                 
                    <TypesOfIngredients ref={bunsRef} onClick={props.onClick} id='bun' arr={props.arr.filter(el => {if(el.type === 'bun') return el})}>
                    Булки
                    </TypesOfIngredients>
                    <TypesOfIngredients ref={saucesRef} onClick={props.onClick} id='sauce' arr={props.arr.filter(el => {if(el.type === 'sauce') return el})}>
                    Соусы
                    </TypesOfIngredients>
                    <TypesOfIngredients ref={mainsRef} onClick={props.onClick} id='main' arr={props.arr.filter(el => {if(el.type === 'main') return el})}>
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