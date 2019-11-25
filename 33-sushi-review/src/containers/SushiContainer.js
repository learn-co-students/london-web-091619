import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

class SushiContainer extends React.Component {
  state = {
    sushiIndexesToDisplay: [0, 1, 2, 3, 4]
  };

  nextSetOfSushis = () => {
    this.setState({
      sushiIndexesToDisplay: this.state.sushiIndexesToDisplay.map(
        sushiIndex => {
          const nextIndex =
            sushiIndex + this.state.sushiIndexesToDisplay.length;
          return nextIndex > this.props.sushis.length - 1
            ? nextIndex - this.props.sushis.length
            : nextIndex;
        }
      )
    });
  };

  render() {
    const sushisToDisplay = this.props.sushis.filter((sushi, i) =>
      this.state.sushiIndexesToDisplay.includes(i)
    );
    return (
      <Fragment>
        <div className="belt">
          {sushisToDisplay.map(sushi => (
            <Sushi
              key={sushi.id}
              {...sushi}
              handleClick={() => this.props.handleSushiClick(sushi)}
            />
          ))}
          <MoreButton handleClick={this.nextSetOfSushis} />
        </div>
      </Fragment>
    );
  }
}

export default SushiContainer;
