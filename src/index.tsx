import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HeaderApp } from 'components/Header';
import { DrawerApp } from 'components/Drawer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HeaderApp />
    <DrawerApp />
    <App />
  </React.StrictMode>
);
