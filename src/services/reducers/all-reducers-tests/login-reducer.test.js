import { loginReducer } from "../login-reducer";
import * as types from "../../action/login-action";

describe("login reducer", () => {
  it("should return the initial state", () => {
    expect(loginReducer(undefined, {})).toEqual({
      email: "",
      name: "",
      success: false,

      request: false,
      failed: false,
    });
  });

  it("should test success login", () => {
    expect(
      loginReducer(
        {
          email: "",
          name: "",
          success: false,

          request: false,
          failed: false,
        },
        {
          type: types.LOGIN_FETCH_SUCCESS,
          name: "bulat",
          email: "email",
        }
      )
    ).toEqual({
      email: "email",
      name: "bulat",
      success: true,

      request: false,
      failed: false,
    });
  });
});
