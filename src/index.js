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

// import './index.css';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* <Route path="/" exact render={props => <Index {...props} />} /> */}
      {/* <Route
        path="/landing-page"
        exact
        render={props => <Landing {...props} />}
      /> */}
      <GuardedRoute path="/" exact component={Index} auth={false} />
      <GuardedRoute path="/landing-page" component={Landing} auth={false} />
      <Route path="/login" exact render={props => <Login {...props} />} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
