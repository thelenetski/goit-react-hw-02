import css from './Feedback.module.css';
import PropTypes from 'prop-types';

const Feedback = ({ rating }) => {
  let { good, neutral, bad } = rating;
  const totalFeedback = good + neutral + bad;

  return (
    <>
      {totalFeedback > 0 ? (
        <div className={css.Feedback}>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {totalFeedback}</p>
          <p>Positive: {Math.round((good / totalFeedback) * 100)}</p>
        </div>
      ) : (
        <p>No FeedBack yet</p>
      )}
    </>
  );
};

Feedback.propTypes = {
  rating: PropTypes.object,
};

export default Feedback;
