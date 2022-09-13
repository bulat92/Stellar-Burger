import style from "./order-number.module.css";
import CheckMarImg from "../../../../img/check-mar-img.png";
import {
  useSelector 
} from "../../../../interface-and-types/hooks";
import { Preloader } from "../../../preloader/preloader";
import { useHistory } from "react-router-dom"; 

export const OrderNumber = () => {

  const { OrderIngredients } = useSelector(
    (store ) => store.burgerConstructorValues
  );

  const history = useHistory();
  if (OrderIngredients.length === 0) {
    history.push("/");
  }

  const { orderNumber } = useSelector(
    (store ) => store.orderedIngredientsValues
  );
 
  return (
    <>
      {orderNumber ? (
        <div className={style.OrderDetails}>
          <p className={`${style.numberOrder} text text_type_digits-large`}>
            {orderNumber}
          </p>
          <p className={`${style.underOrderText} text text_type_main-medium`}>
            идентификатор заказа
          </p>
          <img
            src={CheckMarImg}
            className={style.CheckMarImg}
            alt="CheckMarImg"
          />
          <p className={`${style.yourOrder} mb-2 text text_type_main-medium`}>
            Ваш заказ начали готовить
          </p>
          <p className="text text_type_main-default text_color_inactive">
            Дождитесь готовности на орбитальной станции
          </p>
        </div>
      ) : (
        <Preloader />
      )}
    </>
  );
};
