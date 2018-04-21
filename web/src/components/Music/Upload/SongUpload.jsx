import React, { Component } from "react";
import axios from "axios";

class SongUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: []
    };
  }

  componentDidMount() {
    axios
      .get("/genres")
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
    const genres = this.state.genres.map(genre => (
      <option key={genre.id} value={genre.id}>
        {genre.name}
      </option>
    ));
    return (
      <div className="ui inverted segment" className="upload-container">
        <form action="/upload" method="post" encType="multipart/form-data">
          <div className="ui fluid input">
            <input type="text" name="title" placeholder="Song title" />
          </div>
          <div className="ui fluid input">
            <input type="text" name="artist" placeholder="Artist" />
          </div>
          <div>
            <select className="ui item simple dropdown" name="genre">
              {genres}
            </select>
          </div>
          <div>
            <input type="file" name="song" multiple />
          </div>
          <div>
            <button className="upload ui white inverted button">Submit</button>
          </div>
        </form>
      </div>
    );
  };
}

export default SongUpload;
