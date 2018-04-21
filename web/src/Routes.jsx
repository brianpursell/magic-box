import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Music from './components/Music/Music.jsx';
import SongUpload from './components/Music/Upload/SongUpload.jsx';
import Prompts from './components/Prompts/Prompts.jsx';
import Sprites from './components/Sprites/Sprites.jsx';
import Worlds from './components/Worlds/Worlds.jsx';

export const paths = {
  HOME: '/',
  MUSIC: '/music',
  PROMPTS: '/prompts',
  SPRITES: '/sprites',
  WORLDS: '/worlds'
};

class Routes extends Component {
  state = {

  }

  render = () => {
    return (
      <Switch>
        <Route exact path={paths.HOME} component={Home} />
        <Route path={paths.MUSIC} component={Music} />
        <Route path={'/song-upload'} component={SongUpload} />
        <Route path={paths.PROMPTS} component={Prompts} />
        <Route path={paths.SPRITES} component={Sprites} />
        <Route path={paths.WORLDS} component={Worlds} />
      </Switch>
    );
  }  
}

export default Routes;
