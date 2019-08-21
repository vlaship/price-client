import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from '@material-ui/styles';
import App from './components/app/app';
import theme from './components/theme';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App/>
    </ThemeProvider>, document.getElementById('root'));
