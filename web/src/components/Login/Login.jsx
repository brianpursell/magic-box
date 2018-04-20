import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {};

  render = () => {
    return (
      <div className="ui inverted segment">
        <form className="ui inverted form" action="/login" method="post">
          <div className="equal width fields">
            <div className="field">
              <label>Username </label>
              <div className="ui fluid input">
                <input type="text" name="username" />
              </div>
            </div>
            <div className="field">
              <label>Password</label>
              <div className="ui fluid input">
                <input type="password" name="password" />
              </div>
            </div>
          </div>
          <button className="ui white inverted button" type="submit">
            Login{" "}
          </button>
        </form>
        <Link className="SignUp" to="/signup">
          Sign Up
        </Link>
      </div>
    );
  };
}

export default Login;
