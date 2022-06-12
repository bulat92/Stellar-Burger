import { combineReducers } from "redux";
import { BurgersReducer } from './BurgerIngredients';
import { orderReducer } from './fetchMakeOrder';
import { BurgerConstructorReducer } from './BurgerConstructor';
 
export const rootReducer = combineReducers({
    burgers: BurgersReducer,
    orderedIngredientsValues: orderReducer,
    BurgerConstructor: BurgerConstructorReducer
});