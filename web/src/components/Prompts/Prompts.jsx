import React, { Component } from "react";
import axios from "axios";

class Prompts extends Component {
  state = {
    prompts: [
      {
        title: "Friend",
        prompt_name: "Let's be friends"
      },
      {
        title: "Not friend",
        prompt_name: "Let's not be friends"
      },
      {
        title: "Maybe friend",
        prompt_name: "I'll think about it"
      }
    ]
  };

  componentDidMount = () => {
    axios.get('/prompts')
    .then(prompts => this.setState({prompts: prompts.data}))
      .catch(err => console.error(err));
  }

  render = () => {
    return (
      <div className="container">
        <div className="page-title">PROMPTS</div>
        <div className="ui link cards">
          {this.state.prompts.map(({ title, prompt_name }) => (
            <Prompt
              key={title} 
              title={title} 
              prompt={prompt_name} 
            />
          ))}
        </div>
      </div>
    );
  };
}

const Prompt = ({ title, prompt }) => (
  <div className="card prompt">
    <span>{title}</span>
    <span>{prompt}</span>
  </div>
);

export default Prompts;
