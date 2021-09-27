import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

// Views
import Home from "./Views/Home";
import Expressions from "./Views/Expressions";
import Register from "./Views/Register";

export default (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/expressions" component={Expressions} />
      <Route exact path="/register" component={Register} />
    </Switch>
  </Router>
);
