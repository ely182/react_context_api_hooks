import React from 'react';
import ReactDOM from 'react-dom';
import { CounterContextProvider } from './contexts/counterContext';
import './styles/global-styles.css';

import { Home } from './templates/Home';

ReactDOM.render(
  <React.StrictMode>
    <Home />
    <CounterContextProvider>
      <Home />
    </CounterContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);