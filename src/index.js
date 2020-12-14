import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// context
import { ThemeProvider } from './context/ThemeManager';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
