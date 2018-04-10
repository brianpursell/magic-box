import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Header from './components/Header.jsx';
import styles from '../src/styles.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [0,1,2,3,4]
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
      {/* <div className="sidenav">
        <a>Search</a>
      </div> */}

      <button className='MagicButton'>Make Magic</button>
      <Header data={this.state}/>

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
