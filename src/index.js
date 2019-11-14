import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.4.0";

// pages for this product
import Components from "views/Components/Components.jsx";
import Home from "views/Home/Home.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import AboutPage from "views/AboutPage/AboutPage.jsx";
import Buying from "views/Buying/Buying.jsx";
import ContactsPage from "views/ContactsPage/ContactsPage.jsx";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/buying" component={Buying} />
      <Route path="/contacts-page" component={ContactsPage} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
