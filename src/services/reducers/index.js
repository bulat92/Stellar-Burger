import { combineReducers } from "redux";
import { burgersReducer } from './burgerIngredients';
import { orderReducer } from './fetchMakeOrder';
import { burgerConstructorReducer } from './burgerConstructor';
 
export const rootReducer = combineReducers({
    burgers: burgersReducer,
    orderedIngredientsValues: orderReducer,
    burgerConstructorValues: burgerConstructorReducer
});