import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.props.stocks.map((stock, index) => <Stock handleClick={() => this.props.sellStock(index)} {...stock}/>)
          }
      </div>
    );
  }

}

export default PortfolioContainer;
