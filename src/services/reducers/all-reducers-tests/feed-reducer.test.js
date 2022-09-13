import { feedReducer, initialState } from "../feed-reducer";
import * as types from "../../action/ws-feed-action";

describe("feed reducer", () => {
  it("should return the initial state", () => {
    expect(feedReducer(undefined, {})).toEqual(initialState);
  });

  it("should get data from websocket for feed", () => {
    expect(
      feedReducer(initialState, {
        type: types.FEED_GET_MESSAGE,
        payload: {
          data: { orders: [], total: 123456789, totalToday: 123456789 },
        },
      })
    ).toEqual({
      orders: [],
      total: 123456789,
      totalToday: 123456789,
      isOpen: false,
      error: null,
    });
  });
});
