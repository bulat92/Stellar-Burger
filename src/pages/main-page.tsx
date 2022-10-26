import { CSSProperties } from "react";
import { BurgerConstructor } from "../components/burger-constructor/burger-constructor";
import { BurgerIngredients } from "../components/burger-ingredients/burger-ingredients"; 
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { PageHeader } from '../components/page-header/page-header'

export const MainPage = () => {

  const style: CSSProperties = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    boxSizing: 'border-box'
  }

  return (
    <>
      <PageHeader>Собери бургер</PageHeader>
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