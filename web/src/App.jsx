import React, { Component } from 'react';
import Routes from './Routes.jsx';
import NavBar from './NavBar.jsx';
import './styles.scss';

class App extends Component {
  state = {

  }

  render = () => {
    return (
      <div className='container'>
        <div className='row'>
          <div className='one column sidenav'>
            <NavBar />
          </div>
          <div className='eleven columns'>
            <Routes />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
