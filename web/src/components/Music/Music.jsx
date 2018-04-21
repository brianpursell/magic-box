import React, { Component } from 'react';
import axios from 'axios';
import SongList from './SongList/SongList.jsx';
import Loading from '../Common/Loading.jsx';
import { Link } from 'react-router-dom';
import '../../styles.scss';

class Music extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gotCreatedSong: true,
      songsArray: [],
      upVoteCount: 0,
      downVoteCount: 0,
      didVote: false,
      userId: 1,
    };
    this.makeMagic = this.makeMagic.bind(this);
    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);
  }

  componentDidMount() {
    const thisHolder = this;
    axios
      .get('/api-music')
      .then((response) => {
        thisHolder.setState({
          // currentUserId:
          songsArray: response.data,
          upVoteCount: response.data.upvotes,
          downVoteCount: response.data.downvotes,
        });
      })
      .catch((error) => {
        throw error;
      });
  }

  makeMagic() {
    this.setState({ gotCreatedSong: false });
  }

  getRefreshedSongData() {
    axios
      .get('/api-music')
      .then((response) => {
        this.setState(
          {
            songsArray: response.data,
            upVoteCount: response.data.upvotes,
            downVoteCount: response.data.downvotes,
          },
          () => {
            console.log('setState fired and this is the new state => ', this.state);
          },
        );
      })
      .catch((error) => {
        throw error;
      });
  }

  postVoteData(voteType, vote) {
    axios
      .post('/votes', { voteType, vote })
      .then((res) => {})
      .catch((err) => {
        throw err;
      });
  }

  upVote(user, song) {
    const voteType = 'upvote';
    const clickedSongId = song.id;
    const currentUserId = this.state.userId;
    axios
      .get('/votes', { params: { clickedSongId, currentUserId, voteType } })
      .then((vote) => {
        const voteData = vote.data;
        console.log('voteData => ', voteData);
        this.postVoteData(voteType, voteData);
      })
      .then(() => {
        this.getRefreshedSongData();
      })
      .catch((error) => {
        throw error;
      });
  }

  downVote(user, song) {
    const voteType = 'downvote';
    const clickedSongId = song.id;
    const currentUserId = this.state.userId;

    axios
      .get('/votes', { params: { clickedSongId, currentUserId, voteType } })
      .then((vote) => {
        const voteData = vote.data;
        this.postVoteData(voteType, voteData);
      })
      .then(() => {
        this.getRefreshedSongData();
      })
      .catch((error) => {
        throw error;
      });
  }

  render() {
    return (
      <div className="MainDiv">
        <Link to="/song-upload">Upload</Link>
        {/* <button onClick={this.makeMagic} className="MagicButton">
          Make Magic
        </button> */}
        <div className="page-title">MUSIC</div>
        <div className="wrapper" />
        {this.state.gotCreatedSong === false ? <Loading /> : null}
        <SongList
          upVoteCount={this.state.upVoteCount}
          downVoteCount={this.state.downVoteCount}
          songsArray={this.state.songsArray}
          upVote={this.upVote}
          downVote={this.downVote}
          didVote={this.didVote}
          userId={this.userId}
        />
      </div>
    );
  }
}

export default Music;
