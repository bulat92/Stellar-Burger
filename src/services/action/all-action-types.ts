import { IResetPassword } from "./reset-password-action";
import { IforgotPassword } from "./forgot-password-action";
import { IBurgerConstructorReducer } from "./burger-constructor";
import { IPostOrder } from "./fetch-make-order";
import { TProfileReducer } from "./profile-action";
import { IGetIngredients } from "./burger-ingredients";
import { TLoginRequest } from "./login-action";
import { TOrdersActions } from "./ws-order-action";
import { TFeedActions } from "./ws-feed-action";

export type allActionTypes =
  | IResetPassword
  | IforgotPassword
  | IBurgerConstructorReducer
  | IPostOrder
  | TProfileReducer
  | IGetIngredients
  | TLoginRequest
  | TFeedActions
  | TOrdersActions;
