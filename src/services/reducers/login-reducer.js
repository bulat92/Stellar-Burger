import {
    LOGIN_FETCH_SUCCESS,
    LOGIN_FETCH_REQUEST,
    LOGIN_FETCH_FAILED,
    LOGOUT_FETCH
  } from "../action/login-action";
  
  const initialState = {
    email: "",
    name: "",
    success: '',
    accessToken: '',
    refreshToken: '',
  
    request: false,
    failed: false,
  };
  
  export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_FETCH_REQUEST: {
        return {
          ...state,
          request: true,
        };
      }
      case LOGIN_FETCH_SUCCESS: {
        return {
          ...state,
          request: false,
          failed: false,
   
          success: action.getedResponse.success,
          accessToken: action.getedResponse.accessToken,
          refreshToken: action.getedResponse.refreshToken,
          name: action.getedResponse.name,
          email: action.getedResponse.email
        };
      }
      case LOGIN_FETCH_FAILED: {
        return {
          ...state,
          failed: true,
        };
      }
      case LOGOUT_FETCH: {
        return {
          ...state,
          success: null,
          accessToken: null,
          refreshToken: null,
          name: null,
          email: null
        };
      }
      default: {
        return state;
      }
    }
  };
  