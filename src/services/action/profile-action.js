import { userURL, baseURL } from "../url";
import { checkResponse } from "../check-response/check-response";
import { getCookie } from "../cookie/cookie-functions";

export const PROFILE_FETCH_SUCCESS = "PROFILE_FETCH_SUCCESS",
  PROFILE_FETCH_REQUEST = "PROFILE_FETCH_REQUEST",
  PROFILE_FETCH_FAILED = "PROFILE_FETCH_FAILED",
  SET_CHANGED_NAME = 'SET_CHANGED_NAME',
  SET_CHANGED_EMAIL = 'SET_CHANGED_EMAIL',
  SET_CHANGED_PASSWORD = 'SET_CHANGED_PASSWORD';

export const profileSaveCancelData = (name, email, password) => {
  return function (dispatch) {
    dispatch({
      type: PROFILE_FETCH_REQUEST,
    });
    fetch(`${baseURL}${userURL}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: getCookie("token"),
      },
      body: JSON.stringify({
        name: name,
        email: email  
      }),
    })
      .then(checkResponse)
      .then(() => {
        dispatch({
          type: PROFILE_FETCH_SUCCESS,
        });
      })
      .catch((e) => {
        console.log(e);
        dispatch({
          type: PROFILE_FETCH_FAILED,
        });
      });
  };
};
