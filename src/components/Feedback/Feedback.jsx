import css from './Feedback.module.css';
import PropTypes from 'prop-types';

const Feedback = ({ rating, total, positive }) => {
  let { good, neutral, bad } = rating;

  return (
    <>
      <div className={css.Feedback}>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive: {positive}</p>
      </div>
    </>
  );
};

Feedback.propTypes = {
  rating: PropTypes.object,
  total: PropTypes.number,
  positive: PropTypes.number,
};

export default Feedback;
