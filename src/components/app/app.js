import style from "./app.module.css";
import { BurgerConstructor } from "./burger-constructor/burger-constructor";
import { BurgerIngredients } from "./burger-ingredients/burger-ingredients";
import { Modal } from "../modal/modal";
import { IngredientDetails } from "../modal/modal-overlay/ingredient-details/ingredient-details";
import { OrderDetails } from "../modal/modal-overlay/order-details/order-details";
import PropTypes from "prop-types";
import { ingredientPropType } from "../../prop-types";
import { useSelector, useDispatch } from "react-redux";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { ORDER_MODAL_MUST_BE_CLOSED } from "../../services/action/fetch-make-order";
import { INGREDIENTS_DETAILS_MUST_BE_CLOSED } from "../../services/action/burger-ingredients";
import { AppHeader } from "../../components/header-apps/header-app";

export const App = () => {
  const { orderDetailsOpen } = useSelector(
    (store) => store.orderedIngredientsValues
  );
  const { IngredientDetailsOpen } = useSelector((store) => store.burgers);

  const dispatch = useDispatch();
 
  const onClose = () => {
    dispatch({ type: ORDER_MODAL_MUST_BE_CLOSED });
    dispatch({ type: INGREDIENTS_DETAILS_MUST_BE_CLOSED });
  };

  return (
    <>
      <AppHeader />
      <div className="headerOnMain">
        <h1>Собери бургер</h1>
      </div>
      <main style={style.App}>

        {IngredientDetailsOpen && (
          <Modal type={"Ingredient"} title={"Детали ингредиента"} detector={IngredientDetailsOpen} onClose={onClose}>
            <IngredientDetails />
          </Modal>
        )}

        {orderDetailsOpen && (
          <Modal type={"order"} detector={orderDetailsOpen} onClose={onClose}>
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
    </> 
  );
};

/* App.propTypes = {
  fromFetch: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired,
}  */