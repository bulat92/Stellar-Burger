import { ForgotPasswordInner } from "../components/inner-forgot-password/inner-forgot-password";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

export const ForgotPassword = () => {
  const {successForgotPassword} = useSelector((store: any) => store.forgotPassword)
  const {success} = useSelector((store: any) => store.login)  
   
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