import { CSSProperties } from "react";
import { BurgerConstructor } from "../components/burger-constructor/burger-constructor";
import { BurgerIngredients } from "../components/burger-ingredients/burger-ingredients"; 
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

export const MainPage = () => {

  const style: CSSProperties = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    boxSizing: 'border-box'
  }

  return (
    <>
      <div className="headerOnMain">
        <h1>Собери бургер</h1>
      </div>
      <main style={style}>
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