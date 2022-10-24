import burgerIngrediends, {
  getIngrediendsRequest,
  getIngrediends, 
  initialState,
} from "../burger-ingrediends";

const arrayForTest = [
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
    image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
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
    image_mobile: "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/meat-04-large.png",
    __v: 0,
  },
];

describe("burger-ingredients reducer", () => {
  test("should return the initial state", () => {
    expect(burgerIngrediends(undefined, { type: undefined })).toEqual(
      initialState
    );
  });

  test("should change ingredientsRequest only", () => {
    expect(burgerIngrediends(initialState, getIngrediendsRequest())).toEqual({
      ...initialState,
      ingredientsRequest: true,
    });
  });
  test("should add array with two ingredients", () => {
    expect(
      burgerIngrediends(initialState, getIngrediends(arrayForTest))
    ).toEqual({
      ...initialState,
      ingredients: arrayForTest,
    });
  });
});
