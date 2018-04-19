import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/Login/Login.jsx';
import Signup from './components/Signup/Signup.jsx';

class Auth extends Component {
  state = {};

  render = () => {
    return (
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route exact path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    );
  };
}

export default Auth;
