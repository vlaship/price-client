import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {ThemeProvider} from '@material-ui/styles';
import theme from './components/theme';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App/>
    </ThemeProvider>, document.getElementById('root'));
