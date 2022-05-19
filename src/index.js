import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './normalize.css';
import AppHeader from './components/AppHeader/AppHeader';
import Main from './components/Main/Main';


const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <React.StrictMode>
    <AppHeader />
    <div className="headerOnMain">
      <h1>Собери бургер</h1>
    </div>
    <Main /> 
  </React.StrictMode>
);
 