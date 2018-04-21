import React, { Component } from "react";
import axios from 'axios';

class Worlds extends Component {
  state = {
    worlds: [
      {
        title: "cole's basement",
        creator: "probablyCole",
        world_map_url: "notaurl"
      }
    ]
  };

  componentDidMount = () => {
    axios.get('/worlds')
      .then(worlds => this.setState({worlds: worlds.data}))
      .catch(err => console.error(err));
  }

  render = () => {
    return (
      <div className="container">
        <div className="page-title">WORLDS</div>
        <div className="ui link cards">
          {this.state.worlds.map(world => (
            <World
              key={world.title}
              title={world.title}
              creator={world.creator}
              worldMapUrl={world.world_map_url}
            />
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
