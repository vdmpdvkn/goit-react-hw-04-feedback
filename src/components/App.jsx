import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = [good, neutral, bad].reduce((acc, key) => {
    return (acc += key);
  }, 0);

  const positiveFeedback = (good * 100) / total;

  function onLeaveFeedback(evt) {
    const currentBtnValue = evt.currentTarget.textContent.toLowerCase();
    switch (currentBtnValue) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  }
  return (
    <>
      <Section title={'Please leave a feedback'}>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title={'Statistics'}>
        {total === 0 ? (
          <Notification message={'There is no feedback'} />
        ) : (
          <Statistics
            options={{ good: good, neutral: neutral, bad: bad }}
            countPositiveFeedbackPercentage={positiveFeedback}
            countTotal={total}
          />
        )}
      </Section>
    </>
  );
};
export default App;
