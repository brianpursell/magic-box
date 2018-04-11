import React from 'react';
import styles from '../styles.scss';
import AudioSnippet from './AudioSnippet.jsx';

const SongList = props => (
    <div>
      {props.data.songsArray.map((song, index) => {
        if (index === props.data.songsArray.length - 1) {
          return <AudioSnippet 
            className={"LastPlayer"}
            key={index} 
            song={song} 
            upVote={props.upVote}
            upVoteCount={props.data.upVoteCount}
            downVote={props.downVote}
            downVoteCount={props.data.downVoteCount}
          />
        } else {
          return <AudioSnippet 
            className={"player"}
            key={index} 
            song={song}
            upVote={props.upVote}
            upVoteCount={props.data.upVoteCount}
            downVote={props.downVote}
            downVoteCount={props.data.downVoteCount}
          />
        }
      })
    }
    </div>
);

export default SongList;
