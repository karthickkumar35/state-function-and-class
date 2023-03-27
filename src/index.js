import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Parent from './components/header/parent';
import State from './components/header/props/state';
import StateClass from './components/header/props/stateClass'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
  <Parent />
  <hr></hr>
  <StateClass/>
  {/* <State /> */}
  </div>
  //<React.StrictMode>
   // <App />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
