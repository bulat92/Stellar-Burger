import { forgotPasswordReducer } from "../forgot-password-reducer";
import * as types from "../../action/forgot-password-action";

describe("forgot-password reducer", () => {
  it("should return the initial state", () => {
    expect(forgotPasswordReducer(undefined, {})).toEqual({
      successForgotPassword: false,
      message: "",

      request: false,
      failed: false,
    });
  });

  it("should set message from forgot-password reducer", () => {
    expect(
      forgotPasswordReducer(
        {
            successForgotPassword: false,
            message: "",
          
            request: false,
            failed: false,
        },
        {
          type: types.FORGOT_PASSWORD_FETCH_SUCCESS,
          message: 'dsda-dfdgfdjf-ggughergty87-t43yt85-9890ty0-yujpghldflpg-ggdfgkdg-gf-gf',
        }
      )
    ).toEqual({
        successForgotPassword: true,
        message: 'dsda-dfdgfdjf-ggughergty87-t43yt85-9890ty0-yujpghldflpg-ggdfgkdg-gf-gf',
      
        request: false,
        failed: false,
    });
  });
});
