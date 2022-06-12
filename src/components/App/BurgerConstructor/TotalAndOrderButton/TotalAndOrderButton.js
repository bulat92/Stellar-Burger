import style from "./TotalAndOrderButton.module.css";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "react-redux";
import { fetchMakeOrder } from "../../../../services/action/fetchMakeOrder";
import { useSelector } from "react-redux";

export const TotalAndOrderButton = () => {
  const { OrderIngredients, bun } = useSelector(
    (store) => store.BurgerConstructor
  );

  const dispatch = useDispatch();

  const totalNumber =
    OrderIngredients.reduce((sum, el) => (sum = Number(el.price) + sum), 0) +
    Number(bun.price) * 2;
    
  const idIngredients = [...OrderIngredients.map((el) => { return el._id }), bun._id];

  return (
    <div className={`${style.Total}`}>
      <div className={`${style.priceBox}`}>
        <p className="text text_type_digits-medium mr-2">{totalNumber}</p>
        <CurrencyIcon type="primary" />
      </div>
      <Button
        onClick={() => {
          dispatch(fetchMakeOrder(idIngredients));
        }}
      >
        <pre>Оформить заказ</pre>
      </Button>
    </div>
  );
};