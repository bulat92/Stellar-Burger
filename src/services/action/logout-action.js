import { logoutURL, baseURL } from "../url";
import { checkResponse } from "../check-response/check-response";
import { deleteCookie } from "../cookie/cookie-functions";

import { LOGOUT_FETCH } from "../action/login-action";

export const logoutFetch = (refreshToken) => {
  return function (dispatch) {
    fetch(`${baseURL}${logoutURL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        token: `{{${refreshToken}}}`,
      }),
    })
      .then(checkResponse)
      .then(() => {
        deleteCookie("token");
        dispatch({
          type: LOGOUT_FETCH,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };
};
