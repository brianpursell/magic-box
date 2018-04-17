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

  postVoteData(voteType, vote) {
    axios
      .post('/votes', { voteType, vote })
      .then((res) => {
        res.send(res);
      })
      .catch((err) => {
        throw err;
      });
  }

  // Need to pass down the currentUserId and the songId to the upVote and the downVote methods so the didVote method can be called and the db get queried
  /*
, {
        params: {
          userId: currentUserId,
          songId: clickedSongId,
        },
      }
  */
  upVote(e) {
    const that = this;
    let voteData;
    const voteType = 'upvote';

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

  downVote() {
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
