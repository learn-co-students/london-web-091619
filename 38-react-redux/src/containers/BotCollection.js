import React from "react";
import BotCard from "../components/BotCard";

import { connect } from "react-redux";

class BotCollection extends React.Component {
  //your code here

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.props.bots.map(bot => (
            <BotCard
              key={bot.id}
              bot={bot}
              clickFunction={this.props.selectBot}
            />
          ))}
          Collection of all bots
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    bots: state.bots
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectBot: bot => dispatch({ type: "SELECT_BOT", payload: { bot } })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BotCollection);
