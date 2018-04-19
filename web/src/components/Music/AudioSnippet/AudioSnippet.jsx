import React from 'react';
import '../../../styles.scss';

const AudioSnippet = props => (
  <div className="player">
    <audio controls className="AudioPlayer">
      <source
        src={`https://s3-us-west-2.amazonaws.com/chiptune-magic/${props.song.url}.mp3`}
        type="video/mp4"
      />
    </audio>

    <div className="songName">{props.song.title}</div>

    <div className="Votes" currentuserid={props.userId} song={props.song}>
      <img
        currentuserid={props.userId}
        song={props.song}
        className="UpVoteArrow"
        src="https://i.imgur.com/8yJfihe.png"
        onClick={() => props.upVote(props.currentUserId, props.song)}
        alt=""
      />
      {props.song.upvotes}
      <img
        currentuserid={props.userId}
        song={props.song}
        className="DownVoteArrow"
        src="https://i.imgur.com/ZA2BSbi.png"
        onClick={() => props.downVote(props.currentUserId, props.song)}
        alt=""
      />
      {props.song.downvotes}
    </div>

    <div className="artist">{props.song.artist}</div>
  </div>
);

export default AudioSnippet;
