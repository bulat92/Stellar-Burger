import { userURL, baseURL } from "../url";
import { checkResponse } from "../check-response/check-response";
import { getCookie } from "../cookie/cookie-functions";
import { AppDispatch, AppThunk } from "../../interface-and-types/types";
import {
  profileRequest,
  profileSuccess,
  getIngrediendsFailed,
} from '../reducers/profile-reducer';
  
interface IProfileFetchSuccess {
  readonly type: boolean;
  readonly success: boolean;
}
interface ISetChanged {
  readonly type: string;
  readonly name: string;
}  
export type TProfileReducer =
  | IProfileFetchSuccess
  | ISetChanged;

 
export const profileSaveCancelData =
  (name?: string, email?: string, password?: string): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch(profileRequest());

    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set("Content-Type", "application/json");
    const token = getCookie("token");
    
    if(token!== undefined){// если не Undefined то добавится в заголовок 
      requestHeaders.set('Authorization', token )
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
        dispatch(profileSuccess(response.success));
      })
      .catch((e) => {
        console.log(e);
        dispatch(getIngrediendsFailed());
      });
  };
