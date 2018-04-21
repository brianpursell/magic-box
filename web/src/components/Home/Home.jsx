import React, { Component } from "react";
import "../../styles.scss";

class Home extends Component {
  state = {};

  render = () => (
    <div className="home">
      {/* <img src='assets/logo.svg' style={{height: 500, width: 500}} /> */}
      <svg viewBox="0 0 850 600">
        <symbol id="s-text">
          <text x="1%" y="25%" className="text--line">
            Welcome
          </text>
        </symbol>

        <g className="g-ants">
          <use xlinkHref="#s-text" className="text-copy" />
          <use xlinkHref="#s-text" className="text-copy" />
          <use xlinkHref="#s-text" className="text-copy" />
          <use xlinkHref="#s-text" className="text-copy" />
          <use xlinkHref="#s-text" className="text-copy" />
        </g>
      </svg>
    </div>
  );
}

export default Home;
