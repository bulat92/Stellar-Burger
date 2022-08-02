import { registerURL, baseURL } from "../url";
import { checkResponse } from "../check-response/check-response";
import {
  LOGIN_FETCH_SUCCESS,
  LOGIN_FETCH_REQUEST,
  LOGIN_FETCH_FAILED,
} from "./login-action";
import { setCookie } from "../cookie/cookie-functions";
import { AppDispatch, AppThunk } from "../../interface-and-types/types";

export const REGISTER_FETCH_SUCCESS = "REGISTER_SUCCESS",
  REGISTER_FETCH_REQUEST = "REGISTER_REQUEST",
  REGISTER_FETCH_FAILED = "REGISTER_FAILED";


interface IRequestFetchRequestORFailed{
  readonly type: typeof REGISTER_FETCH_REQUEST | typeof REGISTER_FETCH_FAILED;
}
interface IRequestFetchSuccess{
  readonly type: typeof REGISTER_FETCH_SUCCESS;
  readonly name: string;
  readonly email: string;
  readonly success: boolean;
}

export type TRegisterReducer = IRequestFetchRequestORFailed | IRequestFetchSuccess;




export const registerFetch =
  (email: string, password: string, name: string): AppThunk => (dispatch: AppDispatch) => {
    dispatch({
      type: LOGIN_FETCH_REQUEST,
    });
    fetch(`${baseURL}${registerURL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
      }),
    })
      .then((response) => {
        return checkResponse(response);
      })
      .then((response) => {
        dispatch({
          type: LOGIN_FETCH_SUCCESS,
          success: response.success,

          name: response.user.name,
          email: response.user.email,
        });
        return response;
      })
      .then((response) => {
        if (response.accessToken) {
          setCookie("token", response.accessToken);
        }
        if (response.refreshToken) {
          setCookie("refreshToken", response.refreshToken);
        }
      })
      .catch((e) => {
        dispatch({
          type: LOGIN_FETCH_FAILED,
        });
      });
  };
