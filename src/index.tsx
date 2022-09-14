import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./normalize.css";
import { App } from "./components/app/app";
import { Provider } from "react-redux";
import { store } from "./services/reducers/store";
import { BrowserRouter as Router } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

const rootHTMLElementIFNotNull = document.getElementById("root");
if (rootHTMLElementIFNotNull) {
  const root = ReactDOM.createRoot(rootHTMLElementIFNotNull);
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
} else {
  console.log("HTML элемент не найден");
} 