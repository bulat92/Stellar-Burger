import { orderReducer, initialState } from "../fetch-make-order";
import * as types from "../../action/fetch-make-order";

describe("burger-ingredients reducer", () => {
  it("should return the initial state", () => {
    expect(orderReducer(undefined, {})).toEqual(initialState);
  });

  it("should get order number", () => {
    expect(
      orderReducer(initialState, {
        type: types.POST_ORDER_SUCCESS,
        number: 123456789,
      })
    ).toEqual({
      orderNumber: 123456789,
      orderNumberRequest: false,
      orderNumberFailed: false,
    });
  });
});
