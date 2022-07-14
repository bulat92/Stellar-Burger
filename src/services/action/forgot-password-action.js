import { forgotPasswordURL, baseURL } from "../url";
import { checkResponse } from "../check-response/check-response";

export const FORGOT_PASSWORD_FETCH_SUCCESS = "FORGOT_PASSWORD_SUCCESS",
  FORGOT_PASSWORD_FETCH_REQUEST = "FORGOT_PASSWORD_REQUEST",
  FORGOT_PASSWORD_FETCH_FAILED = "FORGOT_PASSWORD_FAILED";

export const forgotPasswordFetch = (email) => {
  return function (dispatch) {
    dispatch({
      type: FORGOT_PASSWORD_FETCH_REQUEST,
    });
    fetch(`${baseURL}${forgotPasswordURL}`, {
      method: "POST",
      Headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        email: email,
      }),
    })
      .then(checkResponse)
      .then((response) => {
        dispatch({
          type: FORGOT_PASSWORD_FETCH_SUCCESS,
          success: response.success,
          message: response.message,
        });
      })
      .catch((e) => {
        dispatch({
          type: FORGOT_PASSWORD_FETCH_FAILED,
        });
      });
  };
};
