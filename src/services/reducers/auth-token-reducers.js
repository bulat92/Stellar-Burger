import {
  AUTH_TOKEN_FETCH_SUCCESS,
  AUTH_TOKEN_FETCH_REQUEST,
  AUTH_TOKEN_FETCH_FAILED,
} from "../action/auth-token-action";

const initialState = {
    successRefreshToken: '',
    errorMessage: '',
  
    request: false,
    failed: false,
  };

  export const authTokenReducer = (state = initialState, action) => {
    switch (action.type) {
      case AUTH_TOKEN_FETCH_REQUEST: {
        return {
          ...state,
          request: true,
        };
      }
      case AUTH_TOKEN_FETCH_SUCCESS: {
        return {
          ...state,
          request: false,
          failed: false,
   
          successRefreshToken: true,
        };
      }
      case AUTH_TOKEN_FETCH_FAILED: {
        return {
          ...state,
          failed: true,

          successRefreshToken: false,
        };
      } 
      default: {
        return state;
      }
    }
  };
  