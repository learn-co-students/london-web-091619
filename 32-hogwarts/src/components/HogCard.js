import React from "react";

class HogCard extends React.Component {
  state = {
    showDetails: false
  };

  toggleDetails = () => this.setState({ showDetails: !this.state.showDetails });

  render() {
    const { name, weight } = this.props;
    const medal = this.props["highest medal achieved"];
    const { showDetails } = this.state;
    const slugifiedName = name.toLowerCase().replace(/ /g, "_");
    return (
      <div className="ui card">
        <div className="image">
          <img src={require(`../hog-imgs/${slugifiedName}.jpg`)} />
        </div>
        <div className="content">
          <h1 className="ui header">{name}</h1>
        </div>

        {showDetails && (
          <div className="extra content">
            <a>
              <i className="trophy icon"></i>
              {medal}
            </a>
            <a>
              <i className="weight icon"></i>
              {weight}
            </a>
          </div>
        )}

        <button className="ui button" onClick={this.toggleDetails}>
          {showDetails ? "Hide details" : "Show details"}
        </button>
      </div>
    );
  }
}

export default HogCard;
