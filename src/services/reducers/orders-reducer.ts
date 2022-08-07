import {
  ORDERS_CONNECTION_SUCCESS,
  ORDERS_CONNECTION_ERROR,
  ORDERS_CONNECTION_CLOSED,
  ORDERS_GET_MESSAGE,
  TOrdersActions,
} from "../action/ws-order-action";

import { ingredientsWS } from "../action/ws-feed-action";

export type TOrdersState = {
  data: ingredientsWS[];
  isOpen: boolean;
  error: unknown;
};

const initialState: TOrdersState = {
  data: [],
  isOpen: false,
  error: null,
};

export const ordersReducer = (
  state = initialState,
  action: TOrdersActions
): TOrdersState => {
  switch (action.type) {
    case ORDERS_CONNECTION_SUCCESS: {
      return {
        ...state,
        isOpen: true,
        error: null,
      };
    }
    case ORDERS_CONNECTION_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case ORDERS_CONNECTION_CLOSED: {
      return {
        ...state,
        isOpen: false,
      };
    }
    case ORDERS_GET_MESSAGE: {
      return {
        ...state,
        data: action.payload.data.orders,
      };
    }
    default: {
      return state;
    }
  }
};
