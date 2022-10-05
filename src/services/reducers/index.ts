import { combineReducers } from "redux"; 
import orderReducer from './fetch-make-order';
import burgerConstructor from './burger-constructor';
import forgotPasswordReducer from  './forgot-password-reducer';
import resetPasswordReducer from './reset-password-reducer'; 
import loginReducer from './login-reducer';
import authTokenReducer from './auth-token-reducers';
import profileReducer from './profile-reducer';
import {ordersReducer} from './orders-reducer';
import {feedReducer} from './feed-reducer';
import burgerIngrediends from './burger-ingrediends';
 
export const rootReducer = combineReducers({
    burgerIngrediends: burgerIngrediends,
    orderedIngredientsValues: orderReducer,
    burgerConstructorValues: burgerConstructor ,
    forgotPassword: forgotPasswordReducer,
    resetPassword: resetPasswordReducer, 
    login: loginReducer,
    authToken: authTokenReducer,
    profileData: profileReducer,
    WSOrders: ordersReducer,
    wsFeed: feedReducer
});