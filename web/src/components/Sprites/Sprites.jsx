import React, { Component } from "react";
import axios from "axios";

class Sprites extends Component {
  state = {
    sprites: [
      {
        title: "Warioni",
        creator: "probablyNotCole",
        spritesheet_url: "notaurl"
      },
      {
        title: "Walethargy",
        creator: "definitelyCole",
        spritesheet_url: "notaurl"
      }
    ]
  };

  componentDidMount = () => {
    axios.get('/sprites')
      .then(sprites => this.setState({sprites: sprites.data}))
      .catch(err => console.error(err));
  }

  render = () => {
    return (
      <div className="container">
        <div className="page-title">SPRITES</div>
        <div className="ui link cards">
          {this.state.sprites.map(sprite => (
            <Sprite
              key={sprite.title}
              title={sprite.title}
              creator={sprite.creator}
              spritesheetUrl={sprite.spritesheet_url}
            />
          ))}
        </div>
      </div>
    );
  };
}

const Sprite = ({ title, creator, spritesheetUrl }) => (
  <div className="card">
    <span>{title}</span>
    <span>{creator}</span>
    <span>{spritesheetUrl}</span>
  </div>
);

export default Sprites;
