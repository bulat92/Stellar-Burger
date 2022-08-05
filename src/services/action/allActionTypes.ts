import { TResetPasswordReducer } from "./reset-password-action";
import { TForgotPasswordReducer } from "./forgot-password-action";
import { TAuthTokenReducer } from "../reducers/auth-token-reducers";
import { IBurgerConstructorReducer } from "./burger-constructor";
import { TFetchMakeOrder } from "./fetch-make-order";
import { TProfileReducer } from "./profile-action";
import { TBurgersReducer } from "./burger-ingredients";
import { TRegisterReducer } from "./register-action";
import { TLoginReducer } from "./login-action";
import { TWS } from "./ws-action";

export type allActionTypes =
  | TResetPasswordReducer
  | TForgotPasswordReducer
  | TAuthTokenReducer
  | IBurgerConstructorReducer
  | TFetchMakeOrder
  | TProfileReducer
  | TBurgersReducer
  | TRegisterReducer
  | TLoginReducer
  | TWS;
