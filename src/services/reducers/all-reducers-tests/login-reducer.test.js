import loginReducer, {
  loginRequestSuccess,
  initialState,
} from "../login-reducer";
import * as types from "../../action/login-action";

describe("login reducer", () => {
  test("should return the initial state", () => {
    expect(loginReducer(undefined, {})).toEqual(initialState);
  });

  test("should test success login", () => {
    expect(
      loginReducer(initialState, loginRequestSuccess({name: "bulat", email: "email"}))
    ).toEqual({
      ...initialState,
      email: "email",
      name: "bulat",
      success: true,
      logoutRequest: true,
    });
  });
});
