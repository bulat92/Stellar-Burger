import { RegisterInner } from "../components/inner-register/inner-register";
import { useSelector } from "../interface-and-types/hooks";
import { Redirect } from "react-router-dom";

export const Register = () => {
  const {success} = useSelector((store ) => store.login);

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
          <RegisterInner />
        </>
      );
}