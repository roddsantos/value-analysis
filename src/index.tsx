import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HeaderApp } from 'components/Header';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HeaderApp />
    <App />
  </React.StrictMode>
);
