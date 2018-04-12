import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import SongList from './components/SongList';
import Loading from './components/Loading';
// import styles from '../src/styles.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gotCreatedSong: true,
      songsArray: [1],
      upVoteCount: 0,
      downVoteCount: 0,
    };
    this.makeMagic = this.makeMagic.bind(this);
    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);
  }

  componentDidMount() {
    const thisHolder = this;
    axios.get('/home')
      .then((response) => {
        thisHolder.setState({
          songsArray: response.data.rows,
          upVoteCount: response.data.upvotes,
          downVoteCount: response.data.downvotes,
        });
      })
      .catch((error) => {
        throw (error);
      });
  }

  makeMagic() {
    this.setState({ gotCreatedSong: false });
  }

  upVote() {
    console.log(this, 'UpVote');
  }

  downVote() {
    console.log(this, 'DownVote');
  }

  render() {
    return (
      <div>
        <button onClick={this.makeMagic} className="MagicButton">Make Magic</button>
        <div className="wrapper" />

        {this.state.gotCreatedSong === false ? <Loading /> : null}
        <SongList
          upVoteCount={this.state.upVoteCount}
          downVoteCount={this.state.downVoteCount}
          songsArray={this.state.songsArray}
          upVote={this.upVote}
          downVote={this.downVote}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
