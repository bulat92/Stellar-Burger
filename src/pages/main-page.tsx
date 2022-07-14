import style from "./main-page.module.css";
import { BurgerConstructor } from "../components/burger-constructor/burger-constructor";
import { BurgerIngredients } from "../components/burger-ingredients/burger-ingredients"; 
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

export const MainPage = () => {

  return (
    <>
      <div className="headerOnMain">
        <h1>Собери бургер</h1>
      </div>
      <main className={style.App}>
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