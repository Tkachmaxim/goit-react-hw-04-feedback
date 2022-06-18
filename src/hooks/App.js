import { useState } from 'react';
import Statistics from 'components/Statistics';
import FeedackOptions from 'components/FeedackOptions';
import Section from 'components/Section';
import Notification from 'components/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = ['good', 'neutral', 'bad'];

  const onClickButton = e => {
    const value = e.target.id;
    switch (value) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const result = (good / total) * 100;
    return total ? Math.round(result) : 0;
  };

  return (
    <div>
      <Section title="Please, leave  feedback">
        <FeedackOptions options={options} onLeaveFeedback={onClickButton} />
      </Section>

      {countTotalFeedback() ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Section title="">
          <Notification text="No feedback given" />
        </Section>
      )}
    </div>
  );
};

export { App };
