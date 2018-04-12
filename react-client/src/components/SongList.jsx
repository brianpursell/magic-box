import React from 'react';
import '../styles.scss';
import AudioSnippet from './AudioSnippet';

const SongList = props => (
  // console.log(props),
  <div>
    {props.songsArray.map((song, index) => {
      if (index === props.songsArray.length - 1) {
        return <AudioSnippet className="LastPlayer" key={index} song={song} upVote={props.upVote} upVoteCount={props.upVoteCount} downVote={props.downVote} downVoteCount={props.downVoteCount} />;
      }
        return <AudioSnippet className="player" key={index} song={song} upVote={props.upVote} upVoteCount={props.upVoteCount} downVote={props.downVote} downVoteCount={props.downVoteCount} />;
      })
  }
  </div>
);

export default SongList;
