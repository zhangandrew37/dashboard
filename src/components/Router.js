import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "../App";
import Event from "./Event";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/event/:id" component={Event} />
    </Switch>
  </BrowserRouter>
);

export default Router;
