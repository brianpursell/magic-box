import React from 'react';
import styles from '../styles.scss';

const Header = props => (
    console.log(props.data.array.length),
    <div>
        {props.data.array.map((song, index) => { 
            if (index === props.data.array.length-1) {
                return(
                    <p className="LastPlayer">
                        <div className="songName">Name</div>
                        <audio controls className="AudioPlayer"></audio>
                        {/* <a className="playButton">Play</a> */}
                    </p>
                    )      
            } else{
                return(
                    <p className="player">
                        <div className="songName">Name</div>
                        <audio controls className="AudioPlayer"></audio>
                        {/* <a className="playButton">Play</a>*/}
                    </p>
                    )
            }
        },
            
        )}
    </div>
)

export default Header;
