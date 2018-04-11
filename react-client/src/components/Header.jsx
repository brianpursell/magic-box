import React from 'react';
import styles from '../styles.scss';

const Header = props => (
  (
    <div>
      {props.data.array.map((song, index) => {
        if (index === props.data.array.length - 1) {
          return (
            <p className="LastPlayer">
              <div className="songName">Name</div>
              <div className="Votes">
                <img className="UpVoteArrow" src="https://i.imgur.com/8yJfihe.png" onClick={props.upVote}/>{props.data.upVoteCount}
                <img className="DownVoteArrow" src="https://i.imgur.com/ZA2BSbi.png" onClick={props.downVote} />{props.data.downVoteCount}
              </div>

              <audio controls className="AudioPlayer" />
            </p>
          );
        } else {
          return (
            <p className="player">
              <div className="songName">Name</div>
              <div className="Votes">
                <img
                  className="UpVoteArrow"
                  src="https://i.imgur.com/8yJfihe.png"
                  onClick={props.upVote}
                />{' '}
                {props.data.upVoteCount}{' '}
                <img
                  className="DownVoteArrow"
                  src="https://i.imgur.com/ZA2BSbi.png"
                  onClick={props.downVote}
                />{props.data.downVoteCount}
              </div>

              <audio controls className="AudioPlayer" />
            </p>
          );
        }
      })}
    </div>
  )
);

export default Header;
