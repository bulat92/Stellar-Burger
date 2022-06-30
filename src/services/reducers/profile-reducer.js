import {
    PROFILE_FETCH_SUCCESS,
    PROFILE_FETCH_REQUEST,
    PROFILE_FETCH_FAILED,
  } from "../action/profile-action";
  
  const initialState = {
    email: "",
    name: "",
    success: '',
  
    request: false,
    failed: false,
  };
  
  export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
      case PROFILE_FETCH_REQUEST: {
        return {
          ...state,
          request: true,
        };
      }
      case PROFILE_FETCH_SUCCESS: {
        return {
          ...state,
          request: false,
          failed: false,
   
          successProfileFetch: action.success, 
          name: action.name,
          email: action.email
        };
      }
      case PROFILE_FETCH_FAILED: {
        return {
          ...state,
          failed: true,
        };
      }
      default: {
        return state;
      }
    }
  };
  