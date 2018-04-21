import React, { Component } from 'react';
import axios from 'axios';

class SongUpload extends Component {
  state = {
    genres: false
  };

  componentDidMount() {
    axios
      .get('/genres')
      .then(res => {
        this.setState({
          genres: res.data
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render = () => {
    return (
      <div className="ui inverted segment">
        <form action="/upload" method="post" encType="multipart/form-data">
          <div>
            <input type="text" name="title" placeholder="Song title" />
          </div>
          <div>
            <input type="file" name="song" multiple />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  };
}

export default SongUpload;
