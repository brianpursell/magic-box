import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Header from './components/Header.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <Header name={'Hello world!'} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
