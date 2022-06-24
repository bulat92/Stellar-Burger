import { Switch, Route, useLocation } from "react-router-dom";
import { MainPage } from "./pages/main-page";
import { Profile } from "./pages/profile";
import { NoPage } from "./pages/no-page";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { ForgotPassword } from "./pages/forgot-password";
import { ResetPassword } from "./pages//reset-password";
import { Modal } from "./components/modal/modal";
import { IngredientView } from './pages/ingredient-view';

export const App = () => {
  const location = useLocation();

  let background = location.state && location.state.background;

  return (
    <>
      <Switch location={background || location}>
        <Route path="/" exact={true}>
          <MainPage />
        </Route>
        <Route path="/profile" exact={true}>
          <Profile />
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
        <Route>
          <NoPage />
        </Route>
      </Switch>
      {background && <Route path={['/ingredients/:id', '/order-details']} children={<Modal />} /> }
    </>
  );
};