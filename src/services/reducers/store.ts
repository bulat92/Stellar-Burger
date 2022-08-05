import thunk from "redux-thunk";
import { compose, createStore, applyMiddleware } from "redux";
import { rootReducer } from "./index";
import { wssBaseURL, WSordersURL } from "../url";
import { socketMiddleware } from "../socket-middleware/socketMiddleware";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose | any;
  }
}

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk,
  socketMiddleware(`${wssBaseURL}${WSordersURL}`))
);

export const store = createStore(rootReducer, enhancer);
