import React, { Component } from 'react';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <div>
        <h2>Good:{good}</h2>
        <h2>Neutral:{neutral}</h2>
        <h2>Bad:{bad}</h2>
        <h2>Total:{total}</h2>
        <h2>Positive feedback:{positivePercentage} %</h2>
      </div>
    );
  }
}

export default Statistics;
