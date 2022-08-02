import { Switch, Route, useLocation } from "react-router-dom";
import { Feed } from "../../pages/feed";
import { Orders } from '../../pages/orders';
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
import { useDispatch } from "../../interface-and-types/hooks";
import { useEffect } from "react";
import { AuthTokenFetch } from "../../services/action/auth-token-action";
import { useSelector } from "../../interface-and-types/hooks";
import { getCookie } from "../../services/cookie/cookie-functions";
import { AppHeader } from "../header-apps/header-app";
import { IngredientDetails } from "../modal/modal-overlay/ingredient-details/ingredient-details";
import { OrderDetails } from "../modal/modal-overlay/order-details/order-details";
import { Location } from "history";

import { useHistory } from "react-router-dom";

export const App = (): JSX.Element => {
  const { success } = useSelector((store: any) => store.login);
  const { successRefreshToken } = useSelector((store: any) => store.authToken);

  const location = useLocation<{ background: Location }>();
  const background = location.state && location.state.background;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!success && getCookie("token")) {
      dispatch(AuthTokenFetch());
    }
  }, [success, successRefreshToken]);

  const history = useHistory();

  const onClose = () => {
    history.replace({ pathname: "/" });
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
        <ProtectedRoute path="/profile/orders" exact={true}>
          <Orders />
        </ProtectedRoute>
        <Route>
          <NoPage />
        </Route>
      </Switch>
      {background && (
        <Switch>
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
        </Switch>
      )}
    </>
  );
};
