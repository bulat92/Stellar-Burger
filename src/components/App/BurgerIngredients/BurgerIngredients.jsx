import { useState, useRef, useEffect, useContext } from "react";
import style from "./BurgerIngredients.module.css";
import TypesOfIngredients from "./TypesOfIngredients/TypesOfIngredients";
import TabList from "./TabList/TabList";
import PropTypes from 'prop-types';
import {ingredientPropType} from '../../../prop-types';
import { useInView } from 'react-intersection-observer';
import {BurgerIngredientsContext} from '../BurgerConstructorContext';


const BurgerIngredients = () => {

  const 
    mainSection = useRef(null),
    [currentTab, setCurrentTab] = useState('bun'),
    {fromFetch} = useContext(BurgerIngredientsContext);
 
    const tabListArray = [{
        'nameRu': 'Булки',
        'name':'bun'},
      {
        'nameRu': 'Соусы',
        'name':'sauce'},
      {
        'nameRu': 'Начинки',
        'name':'main'
      }
    ];
 
    
    const sectuionScrollFunc = (tab) => { 
         
        const element = document.getElementById(tab);
         
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
            <TabList tabListArray={tabListArray} sectuionScrollFunc={sectuionScrollFunc} currentTab={currentTab} />
            <section className={style.BurgerIngredients} ref={mainSection}>
                 
                    <TypesOfIngredients ref={bunsRef} id='bun' arr={fromFetch.filter(el => {if(el.type === 'bun') return el})}>
                      Булки
                    </TypesOfIngredients>
                    <TypesOfIngredients ref={saucesRef} id='sauce' arr={fromFetch.filter(el => {if(el.type === 'sauce') return el})}>
                      Соусы
                    </TypesOfIngredients>
                    <TypesOfIngredients ref={mainsRef} id='main' arr={fromFetch.filter(el => {if(el.type === 'main') return el})}>
                      Начинки
                    </TypesOfIngredients>
            </section>
        </section>
    );
}
/* BurgerIngredients.propTypes = {
    arr: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired,
}  */

 
 
export default BurgerIngredients;