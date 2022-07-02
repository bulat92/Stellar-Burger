import { ResetPasswordInner } from "../components/inner-reset-password/inner-reset-password";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

export const ResetPassword = () => {

  const {success} = useSelector(store => store.login); 
  const {successReset} = useSelector(store => store.resetPassword);
  const { successForgotPassword } = useSelector(store => store.forgotPassword);
 
  if (success || successReset || !successForgotPassword) {
    return (
      <Redirect
        to={{
          pathname: '/login'
        }}
      />
    );
  }

    return (
        <>
          <ResetPasswordInner />
        </>
      );
}