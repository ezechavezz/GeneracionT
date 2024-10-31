import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/theme';
import ThemeToggleButton from './themeToggleButton';

function Header() {
    const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div style={{
        backgroundColor: theme === 'light' ? '#fff' : '#222', 
        color: theme === 'light' ? '#000' : '#fff',
        padding: '20px',
        transition: "2s"
      }}>
        <p>El tema actual es {theme}.</p>
        <ThemeToggleButton/>
    </div>
  )
}

export default Header
