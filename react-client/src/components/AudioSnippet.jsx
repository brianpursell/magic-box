import React from 'react';
import '../styles.scss';

const AudioSnippet = props => (
  <div>
    <p className={props.className}>
      <div className="songName">{props.song.title}</div>

      <div className="Votes">
        <img
          className="UpVoteArrow"
          src="https://i.imgur.com/8yJfihe.png"
          onClick={props.upVote}
          alt=""
        />
        {props.song.upvotes}
        <img
          className="DownVoteArrow"
          src="https://i.imgur.com/ZA2BSbi.png"
          onClick={props.downVote}
          alt=""
        />
        {props.song.downvotes}
      </div>

      <div className="artist">{props.song.artist}</div>
      <audio controls className="AudioPlayer">
        <source
          src={`https://s3-us-west-2.amazonaws.com/chiptune-magic/${props.song.url}.mp3`}
          type="video/mp4"
        />>
      </audio>
    </p>
  </div>
);

export default AudioSnippet;
