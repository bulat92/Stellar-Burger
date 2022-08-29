import {
  LOGIN_FETCH_SUCCESS,
  LOGIN_FETCH_REQUEST,
  LOGIN_FETCH_FAILED,
  LOGOUT_FETCH,
  TLoginReducer
} from "../action/login-action";

interface IInitialState {
  email: string;
  name: string;
  success: boolean;
  request: boolean;
  failed: boolean;
}

const initialState: IInitialState = {
  email: "",
  name: "",
  success: false,

  request: false,
  failed: false,
};

export const loginReducer = (state = initialState, action: TLoginReducer) => {
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

        success: true,
        name: action.name,
        email: action.email,
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
        success: false,
        name: false,
        email: false,
      };
    }
    default: {
      return state;
    }
  }
};
