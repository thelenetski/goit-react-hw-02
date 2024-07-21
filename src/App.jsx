import { useEffect, useState } from 'react';
import './App.css';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';

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

  const updateFeedback = feedbackType => {
    if (feedbackType === 'reset') {
      setRating({
        good: 0,
        neutral: 0,
        bad: 0,
      });
      return;
    }

    rating[feedbackType] = rating[feedbackType] + 1;
    setRating({
      ...rating,
      feedbackType: rating[feedbackType],
    });
  };

  return (
    <>
      <Description />
      <Options onUpdate={updateFeedback} rating={rating} />
      <Feedback rating={rating} />
    </>
  );
}

export default App;
