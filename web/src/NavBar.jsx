import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { paths } from './Routes.jsx';

class NavBar extends Component {
  state = {
    selectedRoute: paths.HOME
  }
  
  onClick = (path) => {
    this.setState({selectedRoute: path});
  }
  
  render = () => {
    return (
      <div className='ui sticky inverted vertical menu'>
        <div className='item' style={{backgroundColor: 'maroon', display: 'block'}}>
          <img src='assets/logo.svg' style={{height: 70, width: 70}}/>
          EMOTIONAL JAMSEL
        </div>
        {
          Object.entries(paths).reduce((buttons, [name, route]) => {
            buttons.push(<NavButton onClick={this.onClick.bind(this)} key={name} name={name} route={route} />)
            return buttons;
          }, [])
        }
      </div>
    );
  }
}

const NavButton = ({ onClick, name, route }) => {
  const iconPath = `assets/${name.toLowerCase()}.svg`;
  return (
    <Link className='item' to={route}> 
      <img src={iconPath} style={{height: 100, width: 100}} />
      {name.toLowerCase()}
    </Link>
  );
};

export default NavBar;
