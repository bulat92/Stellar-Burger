import { resetPasswordReducer, initialState } from "../reset-password-reducer";
import * as types from "../../action/reset-password-action";

describe("resetPassword reducer", () => {
  it("should return the initial state", () => {
    expect(resetPasswordReducer(undefined, {})).toEqual(initialState);
  });

  it("should test success reset password", () => {
    expect(
      resetPasswordReducer(initialState, {
        type: types.RESET_PASSWORD_FETCH_SUCCESS,
        success: true,
      })
    ).toEqual({
      ...initialState,
      successReset: true,
    });
  });
});
