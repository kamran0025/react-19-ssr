// import { hydrateRoot } from 'react-dom/client';
// import App from './App';

// hydrateRoot(document.getElementById('root'), <App />);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.hydrateRoot(
  document.getElementById('root'),
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
