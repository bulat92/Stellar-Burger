import burgerConstructor, {
  addIngredients,
  addBun,
  deleteIngredient,
  initialState,
} from "../burger-constructor";

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
  test("should return the initial state", () => {
    expect(burgerConstructor(undefined, {})).toEqual(initialState);
  });

  test("should add bun", () => {
    expect(burgerConstructor(initialState, addBun(objectForTest))).toEqual({
      ...initialState,

      bun: objectForTest,
    });
  });
  test("should add ingredient in order list", () => {
    expect(
      burgerConstructor(initialState, addIngredients(objectForTest))
    ).toEqual({
      ...initialState,
      OrderIngredients: [objectForTest],
    });
  });
  test("should delete ingredient in order list", () => {
    expect(
      burgerConstructor(
        {
          ...initialState,
          OrderIngredients: [objectForTest],
        },
        deleteIngredient(0)
      )
    ).toEqual(initialState);
  });
});
