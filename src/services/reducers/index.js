import { combineReducers } from "redux";
import { burgersReducer } from './burger-ingredients';
import { orderReducer } from './fetch-make-order';
import { burgerConstructorReducer } from './burger-constructor';
import { forgotPasswordReducer } from  './forgot-password-reducer';
import { resetPasswordReducer } from './reset-password-reducer';
import { registerReducer } from './register-reducer';
import { loginReducer } from './login-reducer';
 
export const rootReducer = combineReducers({
    burgers: burgersReducer,
    orderedIngredientsValues: orderReducer,
    burgerConstructorValues: burgerConstructorReducer,
    forgotPassword: forgotPasswordReducer,
    resetPassword: resetPasswordReducer,
    register: registerReducer,
    login: loginReducer
});