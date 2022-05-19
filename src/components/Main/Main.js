import React from "react";
import style from "./Main.module.css";
import BurgerConstructor from './BurgerConstructor/BurgerConstructor';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'

class Main extends React.Component {
    render() {
      return (
        <main style={style.main}>
            <BurgerIngredients />
            <BurgerConstructor />
        </main>
      );
    }
}

export default Main;