import {
  REGISTER_FETCH_SUCCESS,
  REGISTER_FETCH_REQUEST,
  REGISTER_FETCH_FAILED,
} from "../action/register-action";

const initialState = {
  email: "",
  name: "",
  success: '', 

  request: false,
  failed: false,
};

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_FETCH_REQUEST: {
      return {
        ...state,
        request: true,
      };
    }
    case REGISTER_FETCH_SUCCESS: {
      return {
        ...state,
        request: false,
        failed: false,
 
        success: action.getedResponse, 
        name: action.getedResponse.name,
        email: action.getedResponse.email
      };
    }
    case REGISTER_FETCH_FAILED: {
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
