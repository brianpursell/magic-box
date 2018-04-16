import React from 'react';
import '../../../styles.scss';
import AudioSnippet from '../AudioSnippet/AudioSnippet.jsx';

const SongList = props => (
  <div className="SongListMainDiv">
    {props.songsArray.map((song, index) => {
        return <AudioSnippet className="player" key={index} song={song} upVote={props.upVote} upVoteCount={props.upVoteCount} downVote={props.downVote} downVoteCount={props.downVoteCount} />;
      })
    }
  </div>
);

export default SongList;
