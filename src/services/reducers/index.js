import { combineReducers } from "redux";
import { burgersReducer } from './burgerIngredients';
import { orderReducer } from './fetchMakeOrder';
import { BurgerConstructorReducer } from './BurgerConstructor';
 
export const rootReducer = combineReducers({
    burgers: burgersReducer,
    orderedIngredientsValues: orderReducer,
    BurgerConstructor: BurgerConstructorReducer
});