import { combineReducers } from "redux";
import { burgersReducer } from './burger-ingredients';
import { orderReducer } from './fetch-make-order';
import { burgerConstructorReducer } from './burger-constructor';
 
export const rootReducer = combineReducers({
    burgers: burgersReducer,
    orderedIngredientsValues: orderReducer,
    burgerConstructorValues: burgerConstructorReducer
});