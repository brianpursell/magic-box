import React, { Component } from "react";

class Sprites extends Component {
  state = {
    sprites: [
      {
        title: "Warioni",
        creator: "probablyNotCole",
        spritesheetUrl: "notaurl"
      },
      {
        title: "Walethargy",
        creator: "definitelyCole",
        spritesheetUrl: "notaurl"
      }
    ]
  };

  render = () => {
    return (
      <div className="container">
        <div className="page-title">SPRITES</div>
        <div className="ui link cards">
          {this.state.sprites.map(sprite => (
            <Sprite
              title={sprite.title}
              creator={sprite.creator}
              spritesheetUrl={sprite.spritesheetUrl}
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
