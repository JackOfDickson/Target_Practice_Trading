import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/css/main.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import "./assets/js/jquery.min.js";
// import  "./assets/js/jquery.scrolly.min.js";
// import "./assets/js/jquery.scrollex.min.js";
// import "./assets/js/browser.min.js";
// import "./assets/js/breakpoints.min.js";
// import "./assets/js/util.js";
// import "./assets/js/main.js";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
