import ReactDOM from "react-dom";
import { useEffect } from "react";
import style from "./Modal.module.css";
import ModalOverlay from "./ModalOverlay/ModalOverlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { ORDER_MODAL_MUST_BE_CLOSED } from "../../services/action/fetchMakeOrder";
import { INGREDIENTS_DETAILS_MUST_BE_CLOSED } from "../../services/action/burgerIngredients";

const Modal = (props) => {
  const { IngredientDetailsOpen } = useSelector((store) => store.burgers);

  const dispatch = useDispatch();

  const escapeKeyFunc = (e) => {
    e.code === "Escape" &&
      dispatch({ type: INGREDIENTS_DETAILS_MUST_BE_CLOSED });
    e.code === "Escape" && dispatch({ type: ORDER_MODAL_MUST_BE_CLOSED });
  };

  useEffect(() => {
    window.addEventListener("keydown", escapeKeyFunc);

    return () => {
      window.removeEventListener("keydown", escapeKeyFunc);
    };
  }, []);

  const reactModals = document.getElementById("react-modals");
  return ReactDOM.createPortal(
    <>
      <div className={style.Modal}>
        <div className={style.modalHeader}>
          <h2 className={style.h2}>
            {IngredientDetailsOpen && "Детали ингредиента"}
          </h2>
          <CloseIcon
            type="primary"
            onClick={() => {
              dispatch({ type: ORDER_MODAL_MUST_BE_CLOSED });
              dispatch({ type: INGREDIENTS_DETAILS_MUST_BE_CLOSED });
            }}
          />
        </div>
        {props.children}
      </div>
      <ModalOverlay />
    </>,
    reactModals
  );
};

export default Modal;
