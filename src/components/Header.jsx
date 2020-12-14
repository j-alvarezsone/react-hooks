import React, { useState, useContext } from 'react';
import Switch from 'react-switch';

import { ThemeContext } from '../context/ThemeManager';
const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { theme } = useContext(ThemeContext);
  const { toggleTheme } = useContext(ThemeContext);

  const handleClick = () => {
    setDarkMode(!darkMode);
    toggleTheme();
  };

  return (
    <div
      className='navbar navbar-expand-lg navbar-light py-1'
      style={{ background: '#583d72' }}
    >
      <div className='container'>
        <h2 className=' font-weight-bold'>React Hooks</h2>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav ml-auto'>
            <div className='d-flex justify-content-center align-items-center'>
              <span className='font-weight-bold' style={{ color: '#FFF' }}>
                {' '}
                {theme}
              </span>
              <Switch
                onChange={handleClick}
                checked={darkMode}
                onColor='#FFF'
                onHandleColor='#583d72'
                handleDiameter={30}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow='0px 1px 5px rgba(0, 0, 0, 0.6)'
                activeBoxShadow='0px 0px 1px 10px rgba(0, 0, 0, 0.2)'
                height={20}
                width={48}
                className='react-switch pl-3'
                id='material-switch'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
