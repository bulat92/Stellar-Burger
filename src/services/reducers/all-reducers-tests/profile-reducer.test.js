import profileReducer,{
  profileRequest,
  profileSuccess, 
  initialState
} from "../profile-reducer";

describe("profile reducer", () => {
  test("should return the initial state", () => {
    expect(profileReducer(undefined, {})).toEqual(initialState);
  });

  test("should set successProfileFetch", () => {
    expect(
      profileReducer(initialState, profileSuccess(true))
    ).toEqual({
      ...initialState,
      successProfileFetch: true,
    });
  });
  test("should set request value", () => {
    expect(
      profileReducer(initialState,profileRequest(true))
    ).toEqual({
      ...initialState,
      request: true,
    });
  });
});
