import React from 'react';
import '../styles.scss';
import AudioSnippet from './AudioSnippet';

const SongList = props => (
  <div>
    {props.songs.map((song, index) => {
      if (index === props.songs.length - 1) {
        return <AudioSnippet className="LastPlayer" key={index} song={song} upVote={props.upVote} upVoteCount={props.data.upVoteCount} downVote={props.downVote} downVoteCount={props.data.downVoteCount} />;
      }
        return <AudioSnippet className="player" key={index} song={song} upVote={props.upVote} upVoteCount={props.data.upVoteCount} downVote={props.downVote} downVoteCount={props.data.downVoteCount} />;
      
    })
  }
  </div>
);

export default SongList;
