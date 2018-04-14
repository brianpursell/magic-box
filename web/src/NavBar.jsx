import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { paths } from './Routes.jsx';

class NavBar extends Component {
  state = {
    selectedRoute: paths.HOME
  }
  
  onClick = (path) => this.setState({selectedRoute: path});
  
  render = () => {
    console.log(Object.keys(paths))
    return (
      <React.Fragment>
      {Object.entries(paths).reduce((buttons, [key, route]) => {
        console.log(`key: ${key}, route: ${route}`)
        buttons.push(<NavButton onClick={this.onClick.bind(this)} key={key} route={route} />)
        return buttons;
      }, [])}
      </React.Fragment>
    );
  }
}

const NavButton = ({ onClick, key, route }) => (
  <button onClick={() => onClick(route)}>
    <Link to={route} />
    {key.toLowerCase()}
  </button>
);

export default NavBar;
