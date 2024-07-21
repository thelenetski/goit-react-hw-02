import css from './Options.module.css';
import PropTypes from 'prop-types';

const Options = ({ onUpdate, rating }) => {
  const totalFeedback = rating.good + rating.neutral + rating.bad;

  return (
    <div className={css.options}>
      <button onClick={() => onUpdate('good')}>Good</button>
      <button onClick={() => onUpdate('neutral')}>Neutral</button>
      <button onClick={() => onUpdate('bad')}>Bad</button>
      {totalFeedback > 0 && (
        <button onClick={() => onUpdate('reset')}>Reset</button>
      )}
    </div>
  );
};

Options.propTypes = {
  onUpdate: PropTypes.func,
  rating: PropTypes.object,
};

export default Options;
