import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Signup extends Component {
  state = {};

  render = () => {
    return (
      <div>
        <form action="/signup" method="post">
          <div>
            <label>Username</label>
            <input type="text" name="username" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="password" />
          </div>
          <button
            type="submit"
            // onClick={e => this.props.handleAuth(this.state.user)}
          >
            Sign Up
          </button>
        </form>
        <Link to="/">Login</Link>
      </div>
    );
  };
}

export default Signup;
