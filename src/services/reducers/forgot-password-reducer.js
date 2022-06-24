import {
  FORGOT_PASSWORD_FETCH_SUCCESS,
  FORGOT_PASSWORD_FETCH_REQUEST,
  FORGOT_PASSWORD_FETCH_FAILED,
} from "../action/forgot-password-action";

const initialState = {
    success: null,
    message: "",

    request: false,
    failed: false
}

export const forgotPasswordReducer = (state = initialState, action) => {
    switch(action.type){
        case FORGOT_PASSWORD_FETCH_REQUEST:{
            return{
                ...state,
                request: true
            }
        }
        case FORGOT_PASSWORD_FETCH_SUCCESS:{
            return{
                ...state,
                request: false,
                failed: false,
                success: action.getedResponse.success,
                message: action.getedResponse.message
            }
        }
        case FORGOT_PASSWORD_FETCH_FAILED:{
            return{
                ...state,
                failed: true
            }
        }
        default:{
            return state
        }
    }
}