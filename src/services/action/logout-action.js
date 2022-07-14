import { logoutURL, baseURL } from "../url";
import { checkResponse } from "../check-response/check-response";
import { deleteCookie, getCookie } from "../cookie/cookie-functions";

import { LOGOUT_FETCH } from "../action/login-action";

export const logoutFetch = () => {
  return function (dispatch) {
    fetch(`${baseURL}${logoutURL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        token: getCookie("refreshToken"),
      }),
    })
      .then(checkResponse)
      .then((response) => {
        if (response.success) {
          deleteCookie("token");
          deleteCookie("refreshToken");
          dispatch({
            type: LOGOUT_FETCH,
          });
        }else{
          console.log('Logout не сработал')
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
};
