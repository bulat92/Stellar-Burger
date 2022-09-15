import { InnerFeedOrderView } from "../components/inner-feed-order-view/inner-feed-order-view";
import {
  ORDERS_CONNECTION_INIT,
  ORDERS_CONNECTION_CLOSE,
} from "../services/action/ws-order-action";
import { wssBaseURL, WSOrdersURL } from "../services/url"; 
import { useDispatch, useSelector } from "../interface-and-types/hooks";
import { useEffect } from "react";
import { getCookie } from "../services/cookie/cookie-functions";


export const ProfileOrdersView: React.FC = () => {

  const { data } = useSelector((store) => store.WSOrders);

  const dispatch = useDispatch();

  const accessToken = () => {
    let token = getCookie("token");

    if (token) {
      token = token.slice(7);
    }
    return token;
  };

  useEffect(() => {
    if (accessToken() !== undefined) {
      dispatch({
        type: ORDERS_CONNECTION_INIT,
        payload: `${wssBaseURL}${WSOrdersURL}?token=${accessToken()}`,
      });
    } else {
      console.log(accessToken());
      console.log('нет токена');
    }
    return () => {
      dispatch({ type: ORDERS_CONNECTION_CLOSE });
    };
  }, [dispatch]);


  return <InnerFeedOrderView arr={data}/>
};
