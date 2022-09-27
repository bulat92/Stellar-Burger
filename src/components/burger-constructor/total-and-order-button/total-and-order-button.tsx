import style from "./total-and-order-button.module.css";
import { useMemo } from "react";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "../../../interface-and-types/hooks";
import { fetchMakeOrder } from "../../../services/action/fetch-make-order";
import { useHistory, useLocation } from "react-router-dom";
import React from "react";
import { IIngredient } from "../../../interface-and-types/interface";

export const TotalAndOrderButton: React.FC = (): JSX.Element => {
  const { success } = useSelector((store) => store.login);
  const history = useHistory();
  const location = useLocation();

  const { OrderIngredients, bun } = useSelector(
    (store) => store.burgerConstructorValues
  );

  const totalNumber = useMemo(() => {
    let bunPrice = 0;

    if (bun) {
      bunPrice = bun.type === "bun" ? Number(bun.price) * 2 : 0;
    }

    return (
      OrderIngredients.reduce(
        (sum: number, el: IIngredient) => (sum = Number(el.price) + sum),
        0
      ) + bunPrice
    );
  }, [OrderIngredients, bun]);

  const dispatch = useDispatch();

  let idIngredients = [
    ...OrderIngredients.map((el) => {
      return el._id;
    }),
  ];

  if (bun) {
    idIngredients.push(bun._id);
  }

  const onClick = () => {
    if (!success) {
      history.replace({ pathname: "/login" });
    } else {
      if (OrderIngredients.length > 0 && bun) {
        dispatch(fetchMakeOrder(idIngredients));

        history.replace({
          pathname: "/order-details",
          state: { background: location },
        });
      }
    }
  };

  return (
    <div className={`${style.Total}`}>
      <div className={`${style.priceBox}`}>
        <p className="text text_type_digits-medium mr-2">{totalNumber}</p>
        <CurrencyIcon type="primary" />
      </div>
      <Button onClick={onClick}>
        <pre>Оформить заказ</pre>
      </Button>
    </div>
  );
};
