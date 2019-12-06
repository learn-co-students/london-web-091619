import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import BotSpecs from "../components/BotSpecs";

import { connect } from "react-redux";

const API = "https://bot-battler-api.herokuapp.com/api/v1/bots";

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    botArmy: [],
    selectedBot: null
  };

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(bots => this.props.setBots(bots));
  }

  enlistBot = bot => {
    if (!this.state.botArmy.includes(bot)) {
      this.setState({ botArmy: [...this.state.botArmy, bot] });
    } else {
      alert("Bot is already in your army!");
    }
  };

  dischargeBot = bot =>
    this.setState({
      botArmy: this.state.botArmy.filter(armybot => armybot !== bot)
    });

  selectBot = bot => this.setState({ selectedBot: bot });

  deselectBot = bot => this.setState({ selectedBot: null });

  render() {
    return (
      <div>
        <YourBotArmy
          bots={this.state.botArmy}
          dischargeBot={this.dischargeBot}
        />
        {this.props.selectedBot ? <BotSpecs /> : <BotCollection />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedBot: state.bots.find(b => b.id === state.selectedBotId)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setBots: bots =>
      dispatch({
        type: "SET_BOTS",
        payload: {
          bots
        }
      })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BotsPage);
