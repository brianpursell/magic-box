import React from 'react';
<<<<<<< HEAD:web/src/components/Music/SongList/SongList.jsx
import styles from '../../../styles.scss';
import AudioSnippet from '../AudioSnippet/AudioSnippet.jsx';
=======
import '../styles.scss';
import AudioSnippet from './AudioSnippet';
>>>>>>> 85d02270ef040cc66877516b795cede724c7ce96:react-client/src/components/SongList.jsx

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
