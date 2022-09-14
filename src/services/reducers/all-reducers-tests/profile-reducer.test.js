import { profileReducer, initialState } from "../profile-reducer";
import * as types from "../../action/profile-action";

describe("profile reducer", () => {
  it("should return the initial state", () => {
    expect(profileReducer(undefined, {})).toEqual(initialState);
  });

  it("should set successProfileFetch", () => {
    expect(
      profileReducer(initialState, {
        type: types.PROFILE_FETCH_SUCCESS,
        success: true,
      })
    ).toEqual({
      ...initialState,
      successProfileFetch: true,
    });
  });
  it("should set name", () => {
    expect(
      profileReducer(initialState, {
        type: types.SET_CHANGED_NAME,
        name: "bulat",
      })
    ).toEqual({
      ...initialState,
      changedName: "bulat",
    });
  });
  it("should set password", () => {
    expect(
      profileReducer(initialState, {
        type: types.SET_CHANGED_PASSWORD,
        password: "bulat",
      })
    ).toEqual({
      ...initialState,
      changedPassword: "bulat",
    });
  });
  it("should set email", () => {
    expect(
      profileReducer(initialState, {
        type: types.SET_CHANGED_EMAIL,
        email: "email",
      })
    ).toEqual({
      ...initialState,
      changedEmail: "email",
    });
  });
});
