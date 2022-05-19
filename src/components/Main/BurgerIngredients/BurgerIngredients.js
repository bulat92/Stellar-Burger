import React from "react";
import style from "./BurgerIngredients.module.css";
import TypesOfIngredients from "./TypesOfIngredients/TypesOfIngredients";
import TypesList from "./TypesList/TypesList";
import {arr} from '../../utils/data';

 
class BurgerIngredients extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            arrOfTypes:[{
                'id': '0',
                'nameRu': 'Булки',
                'name':'bun'},
            {
                'id': '1',
                'nameRu': 'Соусы',
                'name':'sauce'},
            {
                'id': '2',
                'nameRu': 'Начинки',
                'name':'main'}]}
    }
 
    render() {
      return (
            <section>
                <TypesList list={this.state.arrOfTypes}/>
                <section className={style.BurgerIngredients}>
                    <TypesOfIngredients arr={arr.filter(el => {if(el.type == 'bun') return el})}>
                        Булки
                    </TypesOfIngredients>
                    <TypesOfIngredients arr={arr.filter(el => {if(el.type == 'sauce') return el})}>
                        Соусы
                    </TypesOfIngredients>
                    <TypesOfIngredients arr={arr.filter(el => {if(el.type == 'main') return el})}>
                        Начинки
                    </TypesOfIngredients>
                </section>
            </section>
        );
    }
}

 
export default BurgerIngredients;