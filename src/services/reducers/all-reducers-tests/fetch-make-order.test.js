import orderReducer, { 
  postOrderSuccess,
  initialState
} from "../fetch-make-order"; 

describe("burger-ingredients reducer", () => {
  it("should return the initial state", () => {
    expect(orderReducer(undefined, {})).toEqual(initialState);
  });

  it("should get order number", () => {
    expect(
      orderReducer(initialState, postOrderSuccess(123456789))
    ).toEqual({
      ...initialState,
      orderNumber: 123456789,
    });
  });
});
