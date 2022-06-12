import style from "./App.module.css";
import { BurgerConstructor } from "./BurgerConstructor/BurgerConstructor";
import { BurgerIngredients } from "./BurgerIngredients/BurgerIngredients";
import Modal from "../Modal/Modal";
import IngredientDetails from "../Modal/ModalOverlay/IngredientDetails/IngredientDetails";
import OrderDetails from "../Modal/ModalOverlay/OrderDetails/OrderDetails";
import PropTypes from "prop-types";
import { ingredientPropType } from "../../prop-types";
import { useSelector, useDispatch } from "react-redux";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { ORDER_MODAL_MUST_BE_CLOSED } from "../../services/action/fetchMakeOrder";
import { INGREDIENTS_DETAILS_MUST_BE_CLOSED } from "../../services/action/burgerIngredients";

const App = () => {
  const { orderDetailsOpen } = useSelector(
    (store) => store.orderedIngredientsValues
  );
  const { IngredientDetailsOpen } = useSelector((store) => store.burgers);

  const dispatch = useDispatch();

  const escapeKeyFunc = (e) => {
    e.code === "Escape" &&
      dispatch({ type: INGREDIENTS_DETAILS_MUST_BE_CLOSED });
    e.code === "Escape" && dispatch({ type: ORDER_MODAL_MUST_BE_CLOSED });
  };

  const onClose = () => {
    dispatch({ type: ORDER_MODAL_MUST_BE_CLOSED });
    dispatch({ type: INGREDIENTS_DETAILS_MUST_BE_CLOSED });
  };

  return (
    <main style={style.App}>
      {IngredientDetailsOpen && (
        <Modal type={"Ingredient"} onCloseKey={escapeKeyFunc} onClose={onClose}>
          <IngredientDetails />
        </Modal>
      )}

      {orderDetailsOpen && (
        <Modal type={"order"} onCloseKey={escapeKeyFunc} onClose={onClose}>
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
  );
};

/* App.propTypes = {
  fromFetch: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired,
}  */

export default App;
