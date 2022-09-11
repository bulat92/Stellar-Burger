 import { applyMiddleware } from "redux";
import { rootReducer } from "./index";
import { socketMiddleware } from "../socket-middleware/socketMiddleware";
import { configureStore } from "@reduxjs/toolkit"; 

import {
  ORDERS_CONNECTION_INIT,
  ORDERS_CONNECTION_SUCCESS,
  ORDERS_CONNECTION_ERROR,
  ORDERS_CONNECTION_CLOSED,
  ORDERS_CONNECTION_CLOSE,
  ORDERS_GET_MESSAGE,
  TOrdersActions,
} from "../action/ws-order-action";

import {
  FEED_CONNECTION_INIT,
  FEED_CONNECTION_SUCCESS,
  FEED_CONNECTION_ERROR,
  FEED_CONNECTION_CLOSED,
  FEED_CONNECTION_CLOSE,
  FEED_GET_MESSAGE,
  TFeedActions,
} from "../action/ws-feed-action";

const ordersWsActions = {
  wsInit: ORDERS_CONNECTION_INIT,
  wsClose: ORDERS_CONNECTION_CLOSE,
  onOpen: ORDERS_CONNECTION_SUCCESS,
  onClose: ORDERS_CONNECTION_CLOSED,
  onError: ORDERS_CONNECTION_ERROR,
  onMessage: ORDERS_GET_MESSAGE,
};

const feedWsActions = {
  wsInit: FEED_CONNECTION_INIT,
  wsClose: FEED_CONNECTION_CLOSE,
  onOpen: FEED_CONNECTION_SUCCESS,
  onClose: FEED_CONNECTION_CLOSED,
  onError: FEED_CONNECTION_ERROR,
  onMessage: FEED_GET_MESSAGE,
};
  
/* export const store = createStore(rootReducer, enhancer); */
export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false
    }),
  devTools: process.env.NODE_ENV !== 'production',
  enhancers: [applyMiddleware( 
    socketMiddleware(ordersWsActions),
    socketMiddleware(feedWsActions)
  )]
});
