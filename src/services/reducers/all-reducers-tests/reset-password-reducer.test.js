import { resetPasswordReducer, initialState } from "../reset-password-reducer";
import * as types from "../../action/reset-password-action";

describe("resetPassword reducer", () => {
  it("should return the initial state", () => {
    expect(resetPasswordReducer(undefined, {})).toEqual(initialState);
  });

  it("should test success reset password", () => {
    expect(
      resetPasswordReducer(
        {
          successReset: false,

          request: false,
          failed: false,
        },
        {
          type: types.ORDERS_GET_MESSAGE,
          success: true,
        }
      )
    ).toEqual({
      successReset: false,

      request: false,
      failed: false,
    });
  });
});
