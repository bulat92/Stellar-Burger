import { ProfileInner } from "../components/inner-profile/inner-profile";
import { wssBaseURL, WSOrdersURL } from "../services/url";
import { getCookie } from "../services/cookie/cookie-functions";
import { useDispatch } from "../interface-and-types/hooks";
import { useEffect } from "react";
import {
  ORDERS_CONNECTION_INIT,
  ORDERS_CONNECTION_CLOSE,
} from "../services/action/ws-order-action";

export const Profile = () => {
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

  return <ProfileInner />;
};
