import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Header from './components/Header.jsx';
import Loading from './components/Loading.jsx';
import styles from '../src/styles.scss';
// const pg = require('pg');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gotCreatedSong: true,
      array: [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24
      ],
      upVotes: 0,
      downVotes: 0
    };
    this.makeMagic = this.makeMagic.bind(this);
    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);
  }

  componentDidMount() {
    // $.get('/', function() {
    //   pg.fetch()
    //   this.setState({array: data})
    // })
  }

  makeMagic() {
    this.setState({ gotCreatedSong: false });
    // $.post('/MAKESHIT', function(){
    //   this.setState({gotCreatedSong: true})
    // })
  }

  upVote() {
    console.log('UpVote');
  }

  downVote() {
    console.log('DownVote');
  }

  render() {
    return (
      <div>
        <button onClick={this.makeMagic} className="MagicButton">
          Make Magic{' '}
        </button>
        <div className="wrapper" />

        {this.state.gotCreatedSong === false ? <Loading /> : null}
        <Header
          upVote={this.upVote}
          downVote={this.downVote}
          data={this.state}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
