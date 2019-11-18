import React from "react";
import Painting from "./Painting";

class PaintingList extends React.Component {
  render() {
    return (
      <div className="painting-container">
        {this.props.paintings.map(painting => (
          <Painting painting={painting} />
        ))}
      </div>
    );
  }
}

export default PaintingList;
