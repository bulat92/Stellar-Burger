import { ForgotPasswordInner } from "../components/inner-forgot-password/inner-forgot-password";
import { useSelector } from "../interface-and-types/hooks";
import { Redirect } from "react-router-dom";

export const ForgotPassword = () => {
  const {successForgotPassword} = useSelector((store ) => store.forgotPassword)
  const {success} = useSelector((store ) => store.login)  
   
  if (success || successForgotPassword) {
    return (
      <Redirect
        to={{
          pathname: '/reset-password'
        }}
      />
    );
  }

    return (
        <>
          <ForgotPasswordInner />
        </>
      );
}