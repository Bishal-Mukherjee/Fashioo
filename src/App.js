import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import "./styles.css";
import { Layout } from "./layout";
import theme from "./theme";
import LandingPage from "./layout/LandingPage/LandingPage";
import Services from "./layout/Services/Services";

function App() {
  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {/* <Router>
          <Layout />
        </Router> */}
        <BrowserRouter>
          <Switch>
            <Route path="/landing" component={LandingPage} />
            <Route path="/services" component={Services} />
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
