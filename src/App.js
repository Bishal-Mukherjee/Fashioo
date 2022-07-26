import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import "./styles.css";
import { Layout } from "./layout";
import theme from "./theme";
// import LandingPage from "./layout/LandingPage/LandingPage";
import LandingPage2 from "./layout/LandingPage/LandingPage2";
import Navbar from "./layout/Navbar/Navbar";
import Services from "./layout/Services/Services";
import Consultants from "./layout/Consultants/Consultants";
import Navigation from "./layout/Navbar/Navigation/Navigation";

function App() {
  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {/* <Router>
          <Layout />
        </Router> */}
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={LandingPage2} />
            <Route path="/services" component={Services} />
            <Route path="/consultants" component={Consultants} />
          </Switch>
          <Navigation />
        </BrowserRouter>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
