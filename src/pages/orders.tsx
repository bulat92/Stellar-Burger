import { InnerOrder } from "../components/inner-order/inner-order";
import { useEffect } from "react";
import { useDispatch } from "../interface-and-types/hooks";
import { wssBaseURL, WSOrdersURL } from "../services/url";
import {
  ORDERS_CONNECTION_INIT,
  ORDERS_CONNECTION_CLOSE,
} from "../services/action/ws-order-action";
import { getCookie } from "../services/cookie/cookie-functions";

export const Orders = () => {
  const dispatch = useDispatch();

  const accessToken = () => {
    let token = getCookie("token");

    if (token) {
      token = token.slice(7);
    }
    return token;
  };
 

  useEffect(() => {
    dispatch({
      type: ORDERS_CONNECTION_INIT,
      payload: `${wssBaseURL}${WSOrdersURL}?token=${accessToken()}`,
    });
    return () => {
      dispatch({ type: ORDERS_CONNECTION_CLOSE });
    };
  }, [dispatch]);

  return <InnerOrder />;
};
