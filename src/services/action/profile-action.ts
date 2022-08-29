import { userURL, baseURL } from "../url";
import { checkResponse } from "../check-response/check-response";
import { getCookie } from "../cookie/cookie-functions";
import { AppDispatch, AppThunk } from "../../interface-and-types/types";

export const PROFILE_FETCH_SUCCESS = "PROFILE_FETCH_SUCCESS",
  PROFILE_FETCH_REQUEST = "PROFILE_FETCH_REQUEST",
  PROFILE_FETCH_FAILED = "PROFILE_FETCH_FAILED",
  SET_CHANGED_NAME = "SET_CHANGED_NAME",
  SET_CHANGED_EMAIL = "SET_CHANGED_EMAIL",
  SET_CHANGED_PASSWORD = "SET_CHANGED_PASSWORD";

interface IProfileFetchRequestORFailed {
  readonly type: typeof PROFILE_FETCH_REQUEST | typeof PROFILE_FETCH_FAILED;
}
interface IProfileFetchSuccess {
  readonly type: typeof PROFILE_FETCH_SUCCESS;
  readonly success: boolean;
}
interface ISetChangedName {
  readonly type: typeof SET_CHANGED_NAME;
  readonly name: string;
}
interface ISetChangedEmail {
  readonly type: typeof SET_CHANGED_EMAIL;
  readonly email: string;
}
interface ISetChangedPassword {
  readonly type: typeof SET_CHANGED_PASSWORD;
  readonly password: string;
}

export type TProfileReducer =
  | IProfileFetchRequestORFailed
  | IProfileFetchSuccess
  | ISetChangedName
  | ISetChangedEmail
  | ISetChangedPassword;

 
export const profileSaveCancelData =
  (name?: string, email?: string, password?: string): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch({
      type: PROFILE_FETCH_REQUEST,
    });

    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set("Content-Type", "application/json");
    const notUndefined = getCookie("token");
    
    if(notUndefined !== undefined){// если не Undefined то добавится в заголовок 
      requestHeaders.set('Authorization', notUndefined  )
    }


    fetch(`${baseURL}${userURL}`, {
      method: "PATCH",
      headers: requestHeaders,
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    })
      .then(checkResponse)
      .then((response) => {
        dispatch({
          type: PROFILE_FETCH_SUCCESS,
          success: response.success,
        });
      })
      .catch((e) => {
        console.log(e);
        dispatch({
          type: PROFILE_FETCH_FAILED,
        });
      });
  };
