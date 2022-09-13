import {
  PROFILE_FETCH_SUCCESS,
  PROFILE_FETCH_REQUEST,
  PROFILE_FETCH_FAILED,
  SET_CHANGED_NAME,
  SET_CHANGED_EMAIL,
  SET_CHANGED_PASSWORD,
  TProfileReducer
} from "../action/profile-action";

interface IInitialState {
  changedEmail: string;
  changedName: string;
  changedPassword: string;

  successProfileFetch: boolean;

  request: boolean;
  failed: boolean;
}

export const initialState: IInitialState = {
  changedEmail: "",
  changedName: "",
  changedPassword: "",
  successProfileFetch: false,

  request: false,
  failed: false,
};

export const profileReducer = (state = initialState, action: TProfileReducer) => {
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
      };
    }
    case PROFILE_FETCH_FAILED: {
      return {
        ...state,
        failed: true,
      };
    }
    case SET_CHANGED_NAME: {
      return {
        ...state,
        changedName: action.name,
      };
    }
    case SET_CHANGED_EMAIL: {
      return {
        ...state,
        changedEmail: action.email,
      };
    }
    case SET_CHANGED_PASSWORD: {
      return {
        ...state,
        changedPassword: action.password,
      };
    }
    default: {
      return state;
    }
  }
};
