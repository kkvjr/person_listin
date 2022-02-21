import { createBrowserHistory } from "history";
import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import { INICIO } from "../constants/rotas";
import Inicio from "../pages/Inicio";

const history = createBrowserHistory();

export default function Navigator() {
  return (
    <Router history={history}>
      <Switch>
        <Route path={INICIO} component={Inicio} />
      </Switch>
    </Router>
  );
}
