import resetPasswordReducer, { 
  resetPasswordSuccess, 
  initialState
} from "../reset-password-reducer"; 

describe("resetPassword reducer", () => {
  it("should return the initial state", () => {
    expect(resetPasswordReducer(undefined, {})).toEqual(initialState);
  });

  it("should test success reset password", () => {
    expect(
      resetPasswordReducer(initialState, resetPasswordSuccess(true))
    ).toEqual({
      ...initialState,
      successReset: true,
    });
  });
});
