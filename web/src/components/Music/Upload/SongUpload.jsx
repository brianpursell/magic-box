import React, { Component } from "react";


class SongUpload extends Component {
  state = {};

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