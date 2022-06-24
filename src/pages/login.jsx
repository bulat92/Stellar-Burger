import { AppHeader } from "../components/header-apps/header-app";
import { LoginInner } from "../components/inner-login/inner-login";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

export const Login = () => {
  const {success} = useSelector(store => store.login) 

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
          <LoginInner />
        </>
      );
}