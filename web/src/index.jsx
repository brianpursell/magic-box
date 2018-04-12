import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import SongList from './components/Music/SongList/SongList.jsx';
import Loading from './components/Common/Loading.jsx';
import styles from './styles.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gotCreatedSong: true,
      songsArray: [],
      upVoteCount: 0,
      downVoteCount: 0,
    };
    this.makeMagic = this.makeMagic.bind(this);
    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);
  }

  componentDidMount() {
    let thisHolder = this;
    axios.get('/home')
    .then(function(response) {
      console.log(response.data.rows);
      thisHolder.setState({songsArray: response.data.rows})
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  makeMagic() {
    this.setState({ gotCreatedSong: false });
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
        <button onClick={this.makeMagic} className="MagicButton">Make Magic</button>
        <div className="wrapper" />

        {this.state.gotCreatedSong === false ? <Loading /> : null}
        <SongList
          upVote={this.upVote}
          downVote={this.downVote}
          data={this.state}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
