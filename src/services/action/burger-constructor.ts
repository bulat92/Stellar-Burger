import { IIngredient } from '../../interface-and-types/interface';
export const 
    ADD_INGREDIENT = 'ADD_INGREDIENT',
    ADD_BUN = 'ADD_BUN',
    DELETE_INGREDIENT = 'DELETE_INGREDIENT',
    SORT_INGREDIENT = 'SORT_INGREDIENT';

interface IAddingredientAddBun {
    readonly type: typeof ADD_INGREDIENT | typeof ADD_BUN;
    readonly item: IIngredient;
}
interface IDeleteIngredient {
    readonly type: typeof DELETE_INGREDIENT;
    readonly index: number;
}
interface ISortIngredient {
    readonly type: typeof SORT_INGREDIENT;
    readonly hoverIndex: number;
    readonly dragIndex: number;
}
export type IBurgerConstructorReducer = IAddingredientAddBun | IDeleteIngredient | ISortIngredient;