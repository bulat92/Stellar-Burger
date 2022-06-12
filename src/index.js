import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './normalize.css';
import AppHeader from './components/HeaderApps/AppHeader';
import App from './components/App/App';
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import { compose, createStore, applyMiddleware } from 'redux';
import { rootReducer } from './services/reducers';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, enhancer)  

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <AppHeader />
      <div className="headerOnMain">
        <h1>Собери бургер</h1>
      </div>
      <App /> 
    </Provider>  
  </React.StrictMode>
);
 