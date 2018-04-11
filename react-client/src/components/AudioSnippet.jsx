import React from 'react';
import styles from '../styles.scss';

const AudioSnippet = props => (
    <div>
        <p className={props.className}>
            <div className="songName">Name</div>
            <div className="Votes">
            <img className="UpVoteArrow" src="https://i.imgur.com/8yJfihe.png" onClick={props.upVote}/>{props.upVoteCount}
            <img className="DownVoteArrow" src="https://i.imgur.com/ZA2BSbi.png" onClick={props.downVote} />{props.downVoteCount}
            </div>
            <audio controls className="AudioPlayer" />
        </p>
    </div>
)

export default AudioSnippet;