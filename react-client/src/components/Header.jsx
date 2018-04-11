import React from 'react';
import styles from '../styles.scss';

const Header = props => (
  console.log(props.data.array.length),
  (
    <div>
      {props.data.array.map((song, index) => {
        if (index === props.data.array.length - 1) {
          return (
            <p className="LastPlayer">
              <div className="songName">Name</div>
              <div className="Votes">
                <img
                  className="UpVoteArrow"
                  src="https://i.imgur.com/8yJfihe.png"
                  onClick={props.upVote}
                />{' '}
                0{' '}
                <img
                  className="DownVoteArrow"
                  src="https://i.imgur.com/ZA2BSbi.png"
                  onClick={props.downVote}
                />360
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
                0{' '}
                <img
                  className="DownVoteArrow"
                  src="https://i.imgur.com/ZA2BSbi.png"
                  onClick={props.downVote}
                />360
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
