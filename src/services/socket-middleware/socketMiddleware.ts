import type { Middleware, MiddlewareAPI } from "redux";
import type { AppDispatch, RootState } from "../../interface-and-types/types";
import { allActionTypes } from "../../services/action/allActionTypes";

import {
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
  WS_SEND_MESSAGE,
} from "../action/ws-action";
 

export const socketMiddleware = (WsUrl: string): Middleware => { 

  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let ws: WebSocket | null = null;

    return next => (action: allActionTypes) => {
 
      const { dispatch } = store;
      const { type } = action;

      if (type === WS_CONNECTION_START) {
        ws = new WebSocket(WsUrl);
      }
      if (ws) {
        ws.onopen = (event: Event) => {
          dispatch({ type: WS_CONNECTION_SUCCESS });
        };
        ws.onerror = (event: Event) => {
          dispatch({ type: WS_CONNECTION_ERROR });
        };
        ws.onmessage = (event: MessageEvent) => {
          const {data} = event;
          const parsedData = JSON.parse(data);
          dispatch({ type: WS_GET_MESSAGE, payload: parsedData });
        };
        ws.onclose = (event: CloseEvent) => {
          dispatch({ type: WS_CONNECTION_CLOSED });
        };
      }
      next(action);
    };
  }) as Middleware;
};
