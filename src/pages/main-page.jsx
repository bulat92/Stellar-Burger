import style from "./main-page.module.css";
import { BurgerConstructor } from "../components/burger-constructor/burger-constructor";
import { BurgerIngredients } from "../components/burger-ingredients/burger-ingredients";
import PropTypes from "../prop-types";
import { ingredientPropType } from "../prop-types";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { AppHeader } from "../components/header-apps/header-app";

export const MainPage = () => {

  return (
    <>
      <AppHeader />
      <div className="headerOnMain">
        <h1>Собери бургер</h1>
      </div>
      <main style={style.App}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />
          {/* left */}

          <BurgerConstructor />
          {/* right */}
        </DndProvider>
      </main>
    </> 
  );
};

/* mainPage.propTypes = {
  fromFetch: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired,
}  */