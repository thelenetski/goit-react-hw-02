import { useEffect, useState } from 'react';
import './App.css';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

function App() {
  const [rating, setRating] = useState(() => {
    const data = JSON.parse(window.localStorage.getItem('saveData'));

    if (data !== null) {
      return {
        good: data.good,
        neutral: data.neutral,
        bad: data.bad,
      };
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem('saveData', JSON.stringify(rating));
  }, [rating]);

  const totalFeedback = rating.good + rating.neutral + rating.bad;
  const positive = Math.round((rating.good / totalFeedback) * 100);

  const updateFeedback = feedbackType => {
    if (feedbackType === 'reset') {
      setRating({
        good: 0,
        neutral: 0,
        bad: 0,
      });
      return;
    }

    setRating({
      ...rating,
      [feedbackType]: rating[feedbackType] + 1,
    });
  };

  return (
    <>
      <Description />
      <Options onUpdate={updateFeedback} total={totalFeedback} />
      {totalFeedback > 0 ? (
        <Feedback rating={rating} total={totalFeedback} positive={positive} />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
