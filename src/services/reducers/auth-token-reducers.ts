import {
  AUTH_TOKEN_FETCH_SUCCESS,
  AUTH_TOKEN_FETCH_REQUEST,
  AUTH_TOKEN_FETCH_FAILED,
} from "../action/auth-token-action";

export type TAuthTokenReducerState = {
  successRefreshToken: boolean;
  request: boolean;
  failed: boolean;
};

export interface TAuthTokenReducer {
  readonly type:
    | typeof AUTH_TOKEN_FETCH_SUCCESS
    | typeof AUTH_TOKEN_FETCH_REQUEST
    | typeof AUTH_TOKEN_FETCH_FAILED;
}

const initialState: TAuthTokenReducerState = {
  successRefreshToken: false,
  request: false,
  failed: false,
};

export const authTokenReducer = (state = initialState, action: TAuthTokenReducer) => {
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
