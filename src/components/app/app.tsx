import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import { Feed } from "../../pages/feed";
import { Orders } from "../../pages/orders";
import { MainPage } from "../../pages/main-page";
import { Profile } from "../../pages/profile";
import { NoPage } from "../../pages/no-page";
import { Login } from "../../pages/login";
import { Register } from "../../pages/register";
import { ForgotPassword } from "../../pages/forgot-password";
import { ResetPassword } from "../../pages//reset-password";
import { Modal } from "../modal/modal";
import { IngredientView } from "../../pages/ingredient-view";
import { ProtectedRoute } from "../protected-route/protected-route";
import { useDispatch, useSelector } from "../../interface-and-types/hooks";
import { useEffect } from "react";
import { AuthTokenFetch } from "../../services/action/auth-token-action";
import { getCookie } from "../../services/cookie/cookie-functions";
import { AppHeader } from "../header-apps/header-app";
import { IngredientDetails } from "../modal/modal-overlay/ingredient-details/ingredient-details";
import { OrderDetails } from "../modal/modal-overlay/order-details/order-details";
import { Location } from "history";
import { fetchGetIngredients } from "../../services/action/burger-ingredients";
import { OrderInfo } from "../modal/modal-overlay/order-info/order-info"; 
import { FeedOrderView } from "../../pages/feed-order-view";
import { wssBaseURL, WSFeedURL, WSOrdersURL } from "../../services/url";
import {
  FEED_CONNECTION_INIT,
  FEED_CONNECTION_CLOSE,
} from "../../services/action/ws-feed-action";
import {
  ORDERS_CONNECTION_INIT,
  ORDERS_CONNECTION_CLOSE,
} from "../../services/action/ws-order-action";

export const App = (): JSX.Element => {
  const { success } = useSelector((store: any) => store.login);
  const { successRefreshToken } = useSelector((store: any) => store.authToken);

  const { orders } = useSelector((store) => store.wsFeed);
  const { data } = useSelector((store) => store.WSOrders);

  const location = useLocation<{ background: Location }>();
  const background = location.state && location.state.background;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: FEED_CONNECTION_INIT,
      payload: `${wssBaseURL}${WSFeedURL}`,
    });
    return () => {
      dispatch({ type: FEED_CONNECTION_CLOSE });
    };
  }, [dispatch]);

  useEffect(() => {
    dispatch({
      type: ORDERS_CONNECTION_INIT,
      payload: `${wssBaseURL}${WSOrdersURL}?token=${accessToken()}`,
    });
    return () => {
      dispatch({ type: ORDERS_CONNECTION_CLOSE });
    };
  }, [dispatch]);

  useEffect(() => {
    if (!success && getCookie("token")) {
      dispatch(AuthTokenFetch());
    }
  }, [success, successRefreshToken]);

  useEffect(() => {
    dispatch(fetchGetIngredients());
  }, [dispatch]);

  const accessToken = () => {
    let token = getCookie("token");

    if (token) {
      token = token.slice(7);
    }
    return token;
  };
 
  const history = useHistory();

  const onClose = () => {
    history.go(-1);
  };

  return (
    <>
      <AppHeader /> 
      <Switch location={background || location}>
        <Route path="/" exact={true}>
          <MainPage />
        </Route>
        <ProtectedRoute path="/profile" exact={true}>
          <Profile />
        </ProtectedRoute>
        <ProtectedRoute path="/profile/orders/:id" exact={true}>
          <FeedOrderView arr={data} />
        </ProtectedRoute>
        <Route path="/login" exact={true}>
          <Login />
        </Route>
        <Route path="/register" exact={true}>
          <Register />
        </Route>
        <Route path="/forgot-password" exact={true}>
          <ForgotPassword />
        </Route>
        <Route path="/reset-password" exact={true}>
          <ResetPassword />
        </Route>
        <Route path="/reset-password" exact={true}>
          <ResetPassword />
        </Route>
        <Route path="/ingredients/:id" exact={true}>
          <IngredientView />
        </Route>
        <Route path="/feed/:id" exact={true}>
          <FeedOrderView arr={orders} />
        </Route>
        <Route path="/feed" exact={true}>
          <Feed />
        </Route>
        <ProtectedRoute path="/profile/orders" exact={true}>
          <Orders />
        </ProtectedRoute>
        <Route>
          <NoPage />
        </Route>
      </Switch>
      {background && (
        <Switch>
          <ProtectedRoute path="/profile/orders/:id" exact={true}>
            <Modal onClose={onClose} children={<OrderInfo arr={data} />} />
          </ProtectedRoute>
          <Route path={"/ingredients/:id"}>
            <Modal
              onClose={onClose}
              title={"Детали ингредиента"}
              children={<IngredientDetails />}
            />
          </Route>
          <Route path={"/order-details"}>
            <Modal onClose={onClose} children={<OrderDetails />} />
          </Route>
          <Route path={"/feed/:id"}>
            <Modal onClose={onClose} children={<OrderInfo arr={orders} />} />
          </Route>
        </Switch>
      )}
    </> 
  );
};
