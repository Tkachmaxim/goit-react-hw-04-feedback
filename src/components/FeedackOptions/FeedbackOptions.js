import React, { Component } from 'react';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div>
        {options.map(button => {
          return (
            <button onClick={onLeaveFeedback} id={button} key={button}>
              {button}
            </button>
          );
        })}
      </div>
    );
  }
}

export default FeedbackOptions;
