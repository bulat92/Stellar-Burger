import { burgerConstructorReducer, initialState } from "../burger-constructor";
import * as types from "../../action/burger-constructor";

const objectForTest = {
  _id: "60666c42cc7b410027a1a9b1",
  name: "Краторная булка N-200i",
  type: "bun",
  proteins: 80,
  fat: 24,
  carbohydrates: 53,
  calories: 420,
  price: 1255,
  image: "https://code.s3.yandex.net/react/code/bun-02.png",
  image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
  image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
  __v: 0,
};

describe("burger-constructor reducer", () => {
  it("should return the initial state", () => {
    expect(burgerConstructorReducer(undefined, {})).toEqual(initialState);
  });

  it("should add bun", () => {
    expect(
      burgerConstructorReducer(initialState, {
        type: types.ADD_BUN,
        item: objectForTest,
      })
    ).toEqual({
      ...initialState,

      bun: objectForTest,
    });
  });
  it("should add ingredient in order list", () => {
    expect(
      burgerConstructorReducer(
        {
          OrderIngredients: [],

          bun: {},
        },
        {
          type: types.ADD_INGREDIENT,
          item: objectForTest,
        }
      )
    ).toEqual({
      ...initialState,
      OrderIngredients: [objectForTest],
    });
  });
  it("should delete ingredient in order list", () => {
    expect(
      burgerConstructorReducer(
        {
          ...initialState,
          OrderIngredients: [objectForTest],
        },
        {
          type: types.DELETE_INGREDIENT,
          index: 0,
        }
      )
    ).toEqual(initialState);
  });
});
