import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import GuardedRoute from './GuardedRoute';

import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import "./assets/scss/argon-design-system-react.scss";

// import Index from "views/Index.js";
import Index from "./views/Index.js";
import Landing from "./views/Landing.js";
import Login from "./views/Login.js";

import './index.css';

import * as serviceWorker from './serviceWorker';

let token = localStorage.getItem('token');

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <GuardedRoute path="/" exact component={Index} auth={token} />
      <GuardedRoute path="/landing-page" component={Landing} auth={token} />
      <Route path="/login" exact render={props => <Login {...props} />} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


serviceWorker.unregister();
