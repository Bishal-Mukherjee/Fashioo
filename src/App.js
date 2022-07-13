import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import {MuiThemeProvider} from '@material-ui/core/styles'
import CssBaseline from "@material-ui/core/CssBaseline";


import './styles.css'
import { Layout } from './layout';
import theme from './theme'

function App() {
    return (
        <div>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <Router>
                    <Layout />
                </Router>
            </MuiThemeProvider>
        </div>
    );
}

export default App;
