import { InnerOrder } from "../components/inner-order/inner-order";
import { useDispatch } from "../interface-and-types/hooks";
import { ORDERS_CONNECTION_CLOSE } from "../services/action/ws-order-action";
import { useEffect } from "react";

export const Orders = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch({ type: ORDERS_CONNECTION_CLOSE });
    };
  }, [dispatch]);

  return <InnerOrder />;
};
