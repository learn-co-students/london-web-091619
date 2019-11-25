import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  state = {
    sushis: [],
    eatenSushis: [],
    balance: Math.floor(Math.random() * 30) + 10,
    showUnsufficientFunds: false
  };

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(sushis => {
        this.setState({
          sushis
        });
      });
  }

  shouldShowUnsufficientFunds = (sushis, balance) => {
    if (sushis.length === 0) return false;

    const cheapestSushi = this.state.sushis.reduce(
      (currentCheapestSushi, sushi, i) => {
        if (sushi.price < currentCheapestSushi.price) return sushi;
        return currentCheapestSushi;
      },
      this.state.sushis[0]
    );
    return cheapestSushi.price > this.state.balance;
  };

  eatSushi = sushi => {
    if (this.state.balance < sushi.price)
      return this.setState({
        showUnsufficientFunds: true
      });
    if (this.state.eatenSushis.includes(sushi.id)) return;
    if (sushi.isEaten) return;

    this.setState({
      eatenSushis: [...this.state.eatenSushis, sushi.id],
      balance: this.state.balance - sushi.price
    });
  };

  addFunds = value =>
    this.setState({
      balance: this.state.balance + value,
      showUnsufficientFunds: false
    });

  render() {
    const sushis = this.state.sushis.map(sushi => {
      return {
        ...sushi,
        isEaten: this.state.eatenSushis.includes(sushi.id)
      };
    });
    return (
      <div className="app">
        {this.shouldShowUnsufficientFunds(
          this.state.sushis,
          this.state.balance
        ) && (
          <div>
            you have no money
            <button onClick={() => this.addFunds(10)}>Add $10</button>
            <button onClick={() => this.addFunds(30)}>Add $30</button>
            <button onClick={() => this.addFunds(50)}>Add $50</button>
          </div>
        )}
        <SushiContainer sushis={sushis} handleSushiClick={this.eatSushi} />
        <Table balance={this.state.balance} plates={this.state.eatenSushis} />
      </div>
    );
  }
}

export default App;
