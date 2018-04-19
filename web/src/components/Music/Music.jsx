import React, { Component } from 'react';
import axios from 'axios';
import SongList from './SongList/SongList.jsx';
import Loading from '../Common/Loading.jsx';
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
      userId: 10,
    };
    this.makeMagic = this.makeMagic.bind(this);
    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);
  }

  componentDidMount() {
    const thisHolder = this;
    axios
      .get('/home')
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
      .get('/music')
      .then((response) => {
        console.log('I am the response from the getRefreshedSongData method => ', response);
        that.setState({
          songsArray: response.data,
          upVoteCount: response.data.upvotes,
          downVoteCount: response.data.downvotes,
        });
      })
      .catch((error) => {
        throw error;
      });
  }

  postVoteData(voteType, vote) {
    return axios
      .post('/votes', { voteType, vote })
      .then((res) => {
        res.send(res);
      })
      .catch((err) => {
        throw err;
      });
  }

  // getVoteData(song) {}

  // Need to pass down the currentUserId and the songId to the upVote and the downVote methods so the didVote method can be called and the db get queried
  /*
, {
        params: {
          userId: currentUserId,
          songId: clickedSongId,
        },
      }
  */
  upVote(user, song) {
    const that = this;
    let voteData;
    const voteType = 'upvote';
    const clickedSongId = song.id;
    const currentUserId = this.state.userId;
    console.log('this is the song in the upvote method => ', song);
    axios
      .get('/votes', { params: { clickedSongId, currentUserId } })
      .then((vote) => {
        voteData = vote.data;
        this.postVoteData(voteType, voteData);
      })
      .then(() => {
        this.getRefreshedSongData();
      })
      .catch((error) => {
        throw error;
      });
  }

  downVote(e) {
    const that = this;
    let voteData;
    const voteType = 'downvote';
    axios
      .get('/votes')
      .then((vote) => {
        voteData = vote.data;
        return voteData;
      })
      .then((data) => {
        this.postVoteData(voteType, data);
      })
      .then(() => {
        axios
          .get('/music')
          .then((response) => {
            that.setState({
              songsArray: response.data,
              upVoteCount: response.data.upvotes,
              downVoteCount: response.data.downvotes,
            });
          })
          .catch((error) => {
            throw error;
          });
      })
      .catch((error) => {
        throw error;
      });
  }

  render() {
    return (
      <div className="MainDiv">
        <button onClick={this.makeMagic} className="MagicButton">
          Make Magic
        </button>
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
