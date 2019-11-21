import React from "react";

class Totaliser extends React.Component {
  state = {
    increase: false,
    decrease: false
  };
  componentDidUpdate(prevProps) {
    if (prevProps.total < this.props.total - 50) {
      this.setState({
        increase: true
      });
      this.timeout = setTimeout(() => this.setState({ increase: false }), 5000);
    } else if (prevProps.total > this.props.total) {
      this.setState({
        decrease: true
      });
      this.timeout = setTimeout(() => this.setState({ decrease: false }), 5000);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    return (
      <div
        className={`totaliser ${
          this.state.increase
            ? "pulse-green"
            : this.state.decrease
            ? "pulse-red"
            : ""
        }`}
      >
        {this.props.total}kgs
      </div>
    );
  }
}

export default Totaliser;
