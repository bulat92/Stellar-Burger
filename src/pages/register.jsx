import { AppHeader } from "../components/header-apps/header-app";
import { RegisterInner } from "../components/inner-register/inner-register";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

export const Register = () => {
  const {success} = useSelector(store => store.login);

  if (success) {
    return (
      <Redirect
        to={{
          pathname: '/profile'
        }}
      />
    );
  }

    return (
        <>
          <AppHeader />
          <RegisterInner />
        </>
      );
}