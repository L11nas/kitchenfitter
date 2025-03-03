import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // ✅ Importuojame pagrindinį komponentą
import './components/styles/App.css'; // ✅ Importuojame globalų stilių

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
