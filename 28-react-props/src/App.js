import React, { Component } from "react";
import "./App.css";
import artworks from "./artworks";
import ArtworkList from "./components/ArtworkList";

import PaintingList from "./components/PaintingList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>
          {this.props.title} size: {this.props.size}
        </h2>
        {[<div>1</div>, <div>2</div>, <div>3</div>, <div>4</div>]}
        <PaintingList paintings={artworks} />
      </div>
    );
  }
}

export default App;
