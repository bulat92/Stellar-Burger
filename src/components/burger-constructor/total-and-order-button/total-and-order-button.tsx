import style from "./total-and-order-button.module.css";
import { useMemo } from "react";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "react-redux";
import { fetchMakeOrder } from "../../../services/action/fetch-make-order";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import React from "react";
import { IIngredient } from "../../../interface-and-types/interface";

///////////////////////////////////////////////////////////////////////////////////////////
declare module "react" {
  interface FunctionComponent<P = {}> {
    (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
  }
}
/////////////////////////////////////////////////////////////////////////////////////////

export const TotalAndOrderButton: React.FC = (): JSX.Element => {
  const { success } = useSelector((store: any) => store.login);
  const history = useHistory();
  const location = useLocation();

  const { OrderIngredients, bun } = useSelector(
    (store: any) => store.burgerConstructorValues
  );

  const totalNumber = useMemo(() => {
    const bunPrice = bun.type === "bun" ? Number(bun.price) * 2 : 0;

    return (
      OrderIngredients.reduce(
        (sum: number, el: IIngredient) => (sum = Number(el.price) + sum),
        0
      ) + bunPrice
    );
  }, [OrderIngredients][bun]);

  const dispatch = useDispatch();

  const idIngredients = [
    ...OrderIngredients.map((el: IIngredient) => {
      return el._id;
    }),
    bun._id,
  ];

  const onClick = () => {
    if (!success) {
      history.replace({ pathname: "/login" });
    } else {
      if (OrderIngredients.length > 0 && bun.type === "bun") {
        // @ts-ignore
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
