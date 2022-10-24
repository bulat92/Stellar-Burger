import forgotPasswordReducer, {
  forgotPasswordSuccess,
  initialState,
} from "../forgot-password-reducer";

describe("forgot-password reducer", () => {
  test("should return the initial state", () => {
    expect(forgotPasswordReducer(undefined, {})).toEqual(initialState);
  });

  test("should set message from forgot-password reducer", () => {
    expect(
      forgotPasswordReducer(
        initialState,
        forgotPasswordSuccess(
          "dsda-dfdgfdjf-ggughergty87-t43yt85-9890ty0-yujpghldflpg-ggdfgkdg-gf-gf"
        )
      )
    ).toEqual({
      ...initialState,
      successForgotPassword: true,
      message:
        "dsda-dfdgfdjf-ggughergty87-t43yt85-9890ty0-yujpghldflpg-ggdfgkdg-gf-gf",
    });
  });
});
