import {
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE
} from "../action/ws-action";
import { TWS, IPayload } from "../action/ws-action";
 
interface IInitialState extends IPayload {
  success: boolean;
  error: boolean;
}

const initialState: IInitialState = {
  success: false,
  error: false,
  orders: [],
  total: 0,
  totalToday: 0,
};

export const WSReducer = (state = initialState, action: TWS) => {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS: {
      return { ...state, success: true };
    }
    case WS_GET_MESSAGE: {
      return { ...state, 
        orders: action.payload.orders,
        total: action.payload.total, 
        totalToday: action.payload.totalToday };
    }
    case WS_CONNECTION_CLOSED: {
      return { ...state, success: false };
    }
    case WS_CONNECTION_ERROR: {
      return { ...state, error: true, success: false };
    }
    default:
      return state;
  }
};
