import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./normalize.css";
import { App } from "./app";
import { Provider } from "react-redux";
import { store } from "./services/reducers/store";
import { HashRouter as Router } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <React.StrictMode>
      <Provider store={store}>
        <CookiesProvider>
          <App />
        </CookiesProvider>
      </Provider>
    </React.StrictMode>
  </Router>
);
