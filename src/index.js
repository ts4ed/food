import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/food/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
