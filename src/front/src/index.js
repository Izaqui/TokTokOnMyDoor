import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Card from './card';
import Menu from './menu';


ReactDOM.render(
  <React.StrictMode>
    <App />
    <Menu/>
    <Card/>
    <Card/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
