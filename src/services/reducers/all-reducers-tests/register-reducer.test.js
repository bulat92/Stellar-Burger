import { registerReducer, initialState } from "../register-reducer";
import * as types from "../../action/register-action";

describe("register reducer", () => {
  it("should return the initial state", () => {
    expect(registerReducer(undefined, {})).toEqual(initialState);
  });

  it("should test success register", () => {
    expect(
      registerReducer(
        {
          email: "",
          name: "",
          success: false,

          request: false,
          failed: false,
        },
        {
          type: types.REGISTER_FETCH_SUCCESS,
          success: true,
          name: "name",
          email: "email",
        }
      )
    ).toEqual({
      email: "email",
      name: "name",
      success: true,

      request: false,
      failed: false,
    });
  });
});
