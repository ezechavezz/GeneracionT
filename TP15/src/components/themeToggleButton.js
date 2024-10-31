import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/theme';
import { Button } from 'semantic-ui-react';


const ThemeToggleButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
            <Button onClick={toggleTheme} secondary={theme === 'light'} style={{ transition: "2s", backgroundColor: theme !== 'light' ? '#fff': null}}>
            Cambiar a tema {theme === 'light' ? 'oscuro' : 'claro'}
            </Button>
    )
}

export default ThemeToggleButton