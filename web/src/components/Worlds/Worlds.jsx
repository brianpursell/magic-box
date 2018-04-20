import React, { Component } from 'react';

class Worlds extends Component {
  state = {
    worlds: [
      {
        title: "cole's basement",
        creator: 'probablyCole',
        worldMapUrl: 'notaurl',
      },
    ],
  };

  render = () => {
    return (
      <div className="container">
        <div className="ui link cards">
          {this.state.worlds.map(world => (
            <World title={world.title} creator={world.creator} worldMapUrl={world.worldMapUrl} />
          ))}
        </div>
      </div>
    );
  };
}

const World = ({ title, creator, worldMapUrl }) => (
  <div className="card">
    <span>{title}</span>
    <span>{creator}</span>
    <span>{worldMapUrl}</span>
  </div>
);

export default Worlds;
