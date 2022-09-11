import {
  FORGOT_PASSWORD_FETCH_SUCCESS,
  FORGOT_PASSWORD_FETCH_REQUEST,
  FORGOT_PASSWORD_FETCH_FAILED,
  TForgotPasswordReducer
} from "../action/forgot-password-action";

interface IInitialState {
  successForgotPassword: boolean;
  message: string;
  request: boolean;
  failed: boolean;
}

const initialState: IInitialState = {
  successForgotPassword: false,
  message: "",

  request: false,
  failed: false,
};

export const forgotPasswordReducer = (state = initialState, action: TForgotPasswordReducer) => {
  switch (action.type) {
    case FORGOT_PASSWORD_FETCH_REQUEST: {
      return {
        ...state,
        request: true,
      };
    }
    case FORGOT_PASSWORD_FETCH_SUCCESS: {
      return {
        ...state,
        request: false,
        failed: false,

        successForgotPassword: true,
        message: action.message,
      };
    }
    case FORGOT_PASSWORD_FETCH_FAILED: {
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