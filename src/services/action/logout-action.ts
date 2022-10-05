import { logoutURL, baseURL } from "../url";
import { checkResponse } from "../check-response/check-response";
import { deleteCookie, getCookie } from "../cookie/cookie-functions";
import { AppDispatch, AppThunk } from "../../interface-and-types/types";

import { logoutRequest } from "../reducers/login-reducer";

export const logoutFetch = (): AppThunk => (dispatch: AppDispatch) => {
  const refreshToken = getCookie("refreshToken");
  
  deleteCookie("token");
  deleteCookie("refreshToken");

  dispatch(logoutRequest());

  if (refreshToken) {
    fetch(`${baseURL}${logoutURL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        token: refreshToken,
      }),
    })
      .then(checkResponse)
      .then((response) => {
        if (!response.success) {
          console.log("Logout не сработал");
        } 
      })
      .catch((e) => {
        console.log(e);
      });
  }
};
