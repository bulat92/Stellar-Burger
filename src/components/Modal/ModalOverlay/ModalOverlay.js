import style from "./ModalOverlay.module.css";
import { useDispatch } from "react-redux";
import { ORDER_MODAL_MUST_BE_CLOSED } from "../../../services/action/fetchMakeOrder";
import { INGREDIENTS_DETAILS_MUST_BE_CLOSED } from "../../../services/action/burgerIngredients";

const ModalOverlay = (props) => {
  const dispatch = useDispatch();

  return (
    <div
      className={style.ModalOverlay}
        onClick={() => {
          dispatch({ 
              type: ORDER_MODAL_MUST_BE_CLOSED });
        
          dispatch({ 
            type: INGREDIENTS_DETAILS_MUST_BE_CLOSED });
        }
      }
    ></div>
  );
};

export default ModalOverlay;
