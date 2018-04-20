import React, { Component } from "react";
import { Link } from "react-router-dom";

class Signup extends Component {
  state = {};

  render = () => {
    return (
      <div className="ui inverted segment">
        <form className="ui inverted form" action="/signup" method="post">
          <div className="equal width fields">
            <div className="field">
              <label>Username</label>
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
            {/* onClick={e => this.props.handleAuth(this.state.user)} */}
            Sign Up
          </button>
        </form>
        <Link to="/">Login</Link>
      </div>
    );
  };
}

export default Signup;
