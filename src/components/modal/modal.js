import ReactDOM from "react-dom";
import { useEffect, useMemo } from "react";
import style from "./modal.module.css";
import { ModalOverlay } from "./modal-overlay/modal-overlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { IngredientDetails } from "../../components/modal/modal-overlay/ingredient-details/ingredient-details";
import { OrderDetails } from "../../components/modal/modal-overlay/order-details/order-details";

export const Modal = ( ) => {
  const history = useHistory();

  const { id } = useParams();

  const { ingredients } = useSelector((store) => store.burgers);

  useEffect(() => {
    const escapeKeyFunc = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", escapeKeyFunc);
    return () => {
      window.removeEventListener("keydown", escapeKeyFunc);
    };
  }, []);

  const onClose = (e) => {
    e.stopPropagation();
    history.replace({pathname: '/'});
  };

  const content = useMemo(() => {
    let IngredientForDetails = ingredients.find((el) => el._id === id);

    return IngredientForDetails ? (
      <IngredientDetails IngredientForDetails={IngredientForDetails} />
    ) : (
      <OrderDetails />
    );
  },[id]);

  const reactModals = document.getElementById("react-modals");
  return ReactDOM.createPortal(
    <>
      <div className={style.Modal}>
        <div className={style.modalHeader}>
          <h2 className={style.h2}>{id ? ('Детали ингредиента') : ('')}</h2>
          <CloseIcon type="primary" onClick={onClose} />
        </div>
        {content}
      </div>
      <ModalOverlay onClose={onClose} />
    </>,
    reactModals
  );
};