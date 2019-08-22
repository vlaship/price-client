import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {ThemeProvider} from '@material-ui/styles';
import theme from './components/theme';
import CssBaseline from "@material-ui/core/CssBaseline";

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <App/>
    </ThemeProvider>, document.getElementById('root'));
