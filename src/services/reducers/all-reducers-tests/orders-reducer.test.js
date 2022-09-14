import { ordersReducer, initialState } from "../orders-reducer";
import * as types from "../../action/ws-order-action";

const arrayForTest = [
  {
    30: {
      _id: "6319d4d642d34a001c28681d",
      ingredients: ["60d3b41abdacab0026a733cd", "60d3b41abdacab0026a733c7"],
      status: "done",
      name: "Space флюоресцентный бургер",
      createdAt: "2022-09-08T11:41:10.741Z",
      updatedAt: "2022-09-08T11:41:11.085Z",
      number: 25032,
    },
  },
];

describe("order reducer", () => {
  it("should return the initial state", () => {
    expect(ordersReducer(undefined, {})).toEqual(initialState);
  });

  it("should get orders list from websocket", () => {
    expect(
      ordersReducer(initialState, {
        type: types.ORDERS_GET_MESSAGE,
        payload: {
          data: {
            orders: arrayForTest,
          },
        },
      })
    ).toEqual({
      ...initialState,
      data: arrayForTest,
    });
  });
});
