import { resetPasswordURL,
    baseURL } from '../url';
import { checkResponse } from '../check-response/check-response';


export const RESET_PASSWORD_FETCH_SUCCESS = "RESET_PASSWORD_SUCCESS",
  RESET_PASSWORD_FETCH_REQUEST = "RESET_PASSWORD_REQUEST",
  RESET_PASSWORD_FETCH_FAILED = "RESET_PASSWORD_FAILED";

export const resetPasswordFetch = (password, token) => {

    return function(dispatch){

        dispatch({
            type: RESET_PASSWORD_FETCH_REQUEST
        });
        fetch(`${baseURL}${resetPasswordURL}`, {
            method: 'POST',
            Headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify({
                'password': password,
                'token': token
            })
        })
        .then(checkResponse).then( response => {
            dispatch({
                type: RESET_PASSWORD_FETCH_SUCCESS,
                success: response.success
            })
        })
        .catch( e => {
            dispatch({
                type: RESET_PASSWORD_FETCH_FAILED
            })
        });
    }

}