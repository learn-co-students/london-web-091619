import React from "react";

class Painting extends React.Component {
  logName = () => {
    console.log(this.props.painting.title);
  };

  render() {
    const logName = () => {
      console.log(this.props.painting.title);
    };
    return (
      <div>
        <h1>{this.props.painting.title}</h1>
        <img src={this.props.painting.image} />
        <p>date: {this.props.painting.date}</p>
        <p>votes: {this.props.painting.votes}</p>
        <button onClick={console.log(this.props.painting.title)}>
          downvote
        </button>
        <button onClick={() => console.log(this.props.painting.title)}>
          upvote
        </button>
        <button onClick={logName}>leftvote</button>
        <button onClick={this.logName}>rightvote</button>
      </div>
    );
  }
}

export default Painting;
