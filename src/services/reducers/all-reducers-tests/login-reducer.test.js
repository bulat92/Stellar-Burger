import { loginReducer, initialState } from "../login-reducer";
import * as types from "../../action/login-action";

describe("login reducer", () => {
  it("should return the initial state", () => {
    expect(loginReducer(undefined, {})).toEqual(initialState);
  });

  it("should test success login", () => {
    expect(
      loginReducer(initialState, {
        type: types.LOGIN_FETCH_SUCCESS,
        name: "bulat",
        email: "email",
      })
    ).toEqual({
      ...initialState,
      email: "email",
      name: "bulat",
      success: true,
    });
  });
});
