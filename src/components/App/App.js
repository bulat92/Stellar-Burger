import React, { useEffect, useState } from "react";
import style from "./App.module.css";
import BurgerConstructor from "./BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";
import Modal from "../Modal/Modal";
import IngredientDetails from "../Modal/ModalOverlay/IngredientDetails/IngredientDetails";
import OrderDetails from "../Modal/ModalOverlay/OrderDetails/OrderDetails";
import PropTypes from "prop-types";
import { ingredientPropType } from "../../prop-types";
import { useSelector } from "react-redux";
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

const App = () => {
  const { orderDetailsOpen } = useSelector(
    (store) => store.orderedIngredientsValues
  );
  const { IngredientDetailsOpen } = useSelector((store) => store.burgers);

  const [IngredientDetailModalIsOpen, setIngredientDetailModalIsOpen] =
      useState(false),
    [orderDetailsModalIsOpen, setOrderDetailsModalIsOpen] = useState(false),
    [fromFetch, setFromFetch] = useState([]),
    [fromFetchOrderNumber, setFromFetchOrderInfo] = useState(null);

  const ToggleOrderDetailsModal = () => {};

  const ToggleIngredientDetailModal = (backProp) => {
    IngredientDetailModalIsOpen
      ? setIngredientDetailModalIsOpen(false)
      : setIngredientDetailModalIsOpen(backProp);
  };

  return (
    setFromFetch && (
      <main style={style.App}>
        {IngredientDetailsOpen && (
          <Modal>
            <IngredientDetails />
          </Modal>
        )}

        {orderDetailsOpen && (
          <Modal>
            <OrderDetails />
          </Modal>
        )}
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />
          {/* left */}

          <BurgerConstructor />
          {/* right */}
        </DndProvider>
      </main>
    )
  );
};

/* App.propTypes = {
  fromFetch: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired,
}  */

export default App;
