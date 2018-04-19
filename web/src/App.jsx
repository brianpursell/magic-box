import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Routes from './Routes.jsx';
import NavBar from './NavBar.jsx';
import Auth from './Auth.jsx';
import axios from 'axios';
import './styles.scss';

class App extends Component {
  state = {
    authenticated: false
  };

  componentDidMount() {
    let authenticated = false;
    axios
      .get('/logged-in')
      .then(res => {
        this.setState({
          authenticated: res.data
        });
        if (this.state.authenticated) {
          this.props.history.push('/');
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render = () => {
    return (
      <div className="full height app">
        <NavBar />
        {this.state.authenticated ? <Routes /> : <Auth />}
      </div>
    );
  };
}

export default withRouter(App);
