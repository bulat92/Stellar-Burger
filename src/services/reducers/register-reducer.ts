import {
  REGISTER_FETCH_SUCCESS,
  REGISTER_FETCH_REQUEST,
  REGISTER_FETCH_FAILED,
  TRegisterReducer
} from "../action/register-action";

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

export const registerReducer = (state = initialState, action: TRegisterReducer) => {
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

        success: action.success,
        name: action.name,
        email: action.email,
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
