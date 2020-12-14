import React from 'react';

import './App.css';

// components
import Header from './components/Header';
import Characters from './components/Characters';

// context
import { ThemeContext } from './context/ThemeManager';

function App() {
  const { theme } = React.useContext(ThemeContext);
  return (
    <div className={`App ${theme}`}>
      <Header />
      <Characters />
    </div>
  );
}

export default App;
