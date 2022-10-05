import { IIngredient } from "../../interface-and-types/interface";
interface IAddingredientAddBun {
  readonly type: string;
  readonly payload: IIngredient;
}
interface IDeleteIngredient {
  readonly type: string;
  readonly payload: number;
}
interface ISortIngredient {
  readonly type: string;
  readonly payload: { readonly hoverIndex: number; readonly dragIndex: number };
}
export type IBurgerConstructorReducer =
  | IAddingredientAddBun
  | IDeleteIngredient
  | ISortIngredient;
