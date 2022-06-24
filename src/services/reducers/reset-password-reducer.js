import {
    RESET_PASSWORD_FETCH_SUCCESS,
    RESET_PASSWORD_FETCH_REQUEST,
    RESET_PASSWORD_FETCH_FAILED,
  } from "../action/reset-password-action";
  
  const initialState = {
      password: null,
      token: "",
  
      request: false,
      failed: false
  }
  
  export const resetPasswordReducer = (state = initialState, action) => {
      switch(action.type){
          case RESET_PASSWORD_FETCH_REQUEST:{
              return{
                  ...state,
                  request: true
              }
          }
          case RESET_PASSWORD_FETCH_SUCCESS:{
              return{
                  ...state,
                  request: false,
                  failed: false,
                  
                  success: action.getedResponse.success,
                  message: action.getedResponse.message
              }
          }
          case RESET_PASSWORD_FETCH_FAILED:{
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