import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  state = {};

  render = () => {
    return (
      <div>
        <form action="/login" method="post">
          <div>
            <label>Username</label>
            <input type="text" name="username" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="password" />
          </div>
          <button type="submit">Login</button>
        </form>
        <Link to="/signup">Sign Up</Link>
      </div>
    );
  };
}

export default Login;
