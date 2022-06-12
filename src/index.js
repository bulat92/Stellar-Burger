import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./normalize.css";
import AppHeader from "./components/HeaderApps/AppHeader";
import App from "./components/App/App";
import { Provider } from "react-redux";
import { store } from './services/reducers/store';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppHeader />
      <div className="headerOnMain">
        <h1>Собери бургер</h1>
      </div>
      <App />
    </Provider>
  </React.StrictMode>
);
