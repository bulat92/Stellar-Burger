import { burgersReducer, initialState } from "../burger-ingredients";
import * as types from "../../action/burger-ingredients";

/* const objectForTest =  */

describe("burger-ingredients reducer", () => {
  it("should return the initial state", () => {
    expect(burgersReducer(undefined, {})).toEqual(initialState);
  });

  it("should change ingredientsRequest only", () => {
    expect(
      burgersReducer(initialState, {
        type: types.GET_INGREDIENTS_REQUEST,
      })
    ).toEqual({
      ingredients: [],
      ingredientsRequest: true,
      ingredientsFailed: false,
    });
  });
  it("should add array with two ingredients", () => {
    expect(
      burgersReducer(
        {
          ingredients: [],
          ingredientsRequest: true,
          ingredientsFailed: false,
        },
        {
          type: types.GET_INGREDIENTS,
          ingredients: [
            {
              _id: "60666c42cc7b410027a1a9b1",
              name: "Краторная булка N-200i",
              type: "bun",
              proteins: 80,
              fat: 24,
              carbohydrates: 53,
              calories: 420,
              price: 1255,
              image: "https://code.s3.yandex.net/react/code/bun-02.png",
              image_mobile:
                "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
              image_large:
                "https://code.s3.yandex.net/react/code/bun-02-large.png",
              __v: 0,
            },
            {
              _id: "60666c42cc7b410027a1a9b5",
              name: "Говяжий метеорит (отбивная)",
              type: "main",
              proteins: 800,
              fat: 800,
              carbohydrates: 300,
              calories: 2674,
              price: 3000,
              image: "https://code.s3.yandex.net/react/code/meat-04.png",
              image_mobile:
                "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
              image_large:
                "https://code.s3.yandex.net/react/code/meat-04-large.png",
              __v: 0,
            },
          ],
        }
      )
    ).toEqual({
      ingredients: [
        {
          _id: "60666c42cc7b410027a1a9b1",
          name: "Краторная булка N-200i",
          type: "bun",
          proteins: 80,
          fat: 24,
          carbohydrates: 53,
          calories: 420,
          price: 1255,
          image: "https://code.s3.yandex.net/react/code/bun-02.png",
          image_mobile:
            "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
          image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
          __v: 0,
        },
        {
          _id: "60666c42cc7b410027a1a9b5",
          name: "Говяжий метеорит (отбивная)",
          type: "main",
          proteins: 800,
          fat: 800,
          carbohydrates: 300,
          calories: 2674,
          price: 3000,
          image: "https://code.s3.yandex.net/react/code/meat-04.png",
          image_mobile:
            "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
          image_large:
            "https://code.s3.yandex.net/react/code/meat-04-large.png",
          __v: 0,
        },
      ],
      ingredientsRequest: false,
      ingredientsFailed: false,
    });
  });
});
