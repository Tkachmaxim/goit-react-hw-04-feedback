import React, { Component } from "react";
import Statistics from "./Statistics";
import FeedackOptions from "./FeedackOptions";
import Section from "./Section";




export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad : 0
  }

  onClickButton = (e) => {
    const value = e.target.id;
    this.setState(prevState => ({ [value]: prevState[value] + 1 }))
  }


  countTotalFeedback = () => {
    const values = Object.values(this.state)
    const total = values.reduce((prev, current) => prev + current, 0)
    return total
  }

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback()
    const result = good/total*100
    return total ? Math.round(result) : 0;
  }



  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state)
    console.log(options)
  return (
    <div>
      <Section title='Please, leave  feedback'>
        <FeedackOptions options={options} onLeaveFeedback={this.onClickButton}/>
      </Section>

      {
        this.countTotalFeedback() 
        ? <Section title='Statistics'>
          <Statistics good={good} neutral={neutral} bad = {bad} total = {this.countTotalFeedback()} positivePercentage = {this.countPositiveFeedbackPercentage()} />
        </Section>
        : 'No feedback given'
      }
      

      
    </div>
  );
  }
}




