import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import { Feed } from "../../pages/feed";
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
import { OrderNumber } from "../modal/modal-overlay/order-number/order-number";
import { Location } from "history";
import { fetchGetIngredients } from "../../services/action/burger-ingredients";
import { OrderInfo } from "../modal/modal-overlay/order-info/order-info"; 
import { FeedView } from "../../pages/feed-view";

export const App = (): JSX.Element => {
  const { success, logoutRequest } = useSelector((store) => store.login);
  

  const { orders } = useSelector((store) => store.wsFeed);
  const { data } = useSelector((store) => store.WSOrders);

  const location = useLocation<{ background: Location }>();
  const background = location.state && location.state.background;

  const dispatch = useDispatch();
 
  useEffect(() => {
    if (!success && getCookie("token") && logoutRequest) {
      dispatch(AuthTokenFetch()); 
    }
  }, []);

  useEffect(() => {
    dispatch(fetchGetIngredients());
  }, [dispatch]);

  const history = useHistory();

  const onClose = () => {
    if (history.location.pathname === "/order-details") {
      history.push("/");
    } else {
      history.goBack();
    }
  };

  return (
    <>
      <AppHeader />
      <Switch location={background || location}>
        <Route path="/" exact={true}>
          <MainPage />
        </Route>
        <ProtectedRoute path="/profile">
          <Profile />
        </ProtectedRoute>
        <Route path="/feed/:id" exact={true}>
          <FeedView/>
        </Route>
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
        <Route path="/feed" exact={true}>
          <Feed />
        </Route>
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
            <Modal onClose={onClose} children={<OrderNumber />} />
          </Route>
          <Route path={"/feed/:id"}>
            <Modal onClose={onClose} children={<OrderInfo arr={orders} />} />
          </Route>
        </Switch>
      )}
    </>
  );
};
