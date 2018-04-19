import React, { Component } from 'react';
import axios from 'axios';

class Prompts extends Component {
  state = {
    prompts: [
      {
        title: 'Friend',
        prompt: 'Let\'s be friends',
      },
      {
        title: 'Not friend',
        prompt: 'Let\'s not be friends',
      },
      {
        title: 'Maybe friend',
        prompt: 'I\'ll think about it',
      }, 
    ]
  }

  componentDidMount = () => console.log('mounting prompts component'); 

  render = () => {
    return (
      <div className='container'>
        <div className='ui link cards'>
          {this.state.prompts.map(({title, prompt}) => (
            <Prompt 
              key={title}
              title={title}
              prompt={prompt}
            />
          ))}
        </div>
      </div>
      
    );
  }
}

const Prompt = ({title, prompt}) => (
  <div className='card prompt'>
    <span>{title}</span>
    <span>{prompt}</span>
  </div>
);

export default Prompts;
