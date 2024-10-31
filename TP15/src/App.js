import Header from './components/header';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import List from './components/list';
import React, { useContext } from 'react';
import { ThemeContext } from './contexts/theme';

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="App" style={{backgroundColor: theme === 'light' ? '#fff' : '#333', height:'100vh', transition: "2s"}}>
      <Header/>
      <List/>
    </div>
  );
}

export default App;
