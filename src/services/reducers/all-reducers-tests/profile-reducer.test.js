import { profileReducer } from "../profile-reducer";
import * as types from "../../action/profile-action";

describe("profile reducer", () => {
  it("should return the initial state", () => {
    expect(profileReducer(undefined, {})).toEqual({
      changedEmail: "",
      changedName: "",
      changedPassword: "",
      successProfileFetch: false,

      request: false,
      failed: false,
    });
  });

  it("should set successProfileFetch", () => {
    expect(
      profileReducer(
        {
          changedEmail: "",
          changedName: "",
          changedPassword: "",
          successProfileFetch: false,

          request: false,
          failed: false,
        },
        {
          type: types.PROFILE_FETCH_SUCCESS,
          success: true,
        }
      )
    ).toEqual({
      changedEmail: "",
      changedName: "",
      changedPassword: "",
      successProfileFetch: true,

      request: false,
      failed: false,
    });
  });
  it("should set name", () => {
    expect(
      profileReducer(
        {
          changedEmail: "",
          changedName: "",
          changedPassword: "",
          successProfileFetch: false,

          request: false,
          failed: false,
        },
        {
          type: types.SET_CHANGED_NAME,
          name: "bulat",
        }
      )
    ).toEqual({
      changedEmail: "",
      changedName: "bulat",
      changedPassword: "",
      successProfileFetch: false,

      request: false,
      failed: false,
    });
  });
  it("should set password", () => {
    expect(
      profileReducer(
        {
          changedEmail: "",
          changedName: "",
          changedPassword: "",
          successProfileFetch: false,

          request: false,
          failed: false,
        },
        {
          type: types.SET_CHANGED_PASSWORD,
          password: "bulat",
        }
      )
    ).toEqual({
      changedEmail: "",
      changedName: "",
      changedPassword: "bulat",
      successProfileFetch: false,

      request: false,
      failed: false,
    });
  });
  it("should set email", () => {
    expect(
      profileReducer(
        {
          changedEmail: "",
          changedName: "",
          changedPassword: "",
          successProfileFetch: false,

          request: false,
          failed: false,
        },
        {
          type: types.SET_CHANGED_EMAIL,
          email: "email",
        }
      )
    ).toEqual({
      changedEmail: "email",
      changedName: "",
      changedPassword: "",
      successProfileFetch: false,

      request: false,
      failed: false,
    });
  });
});