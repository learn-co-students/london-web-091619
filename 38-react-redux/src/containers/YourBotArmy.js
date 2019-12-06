import React from "react";
import BotCard from "../components/BotCard";

import { connect } from "react-redux";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.bots.map(bot => (
              <BotCard
                key={bot.id}
                bot={bot}
                clickFunction={this.props.dischargeBot}
              />
            ))}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    bots: state.enlistedBotIds.map(bid => state.bots.find(b => b.id === bid))
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dischargeBot: bot => dispatch({ type: "DISCHARGE_BOT", payload: { bot } })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(YourBotArmy);
