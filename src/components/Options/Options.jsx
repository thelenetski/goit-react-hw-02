import css from './Options.module.css';
import PropTypes from 'prop-types';

const Options = ({ onUpdate, total }) => {
  return (
    <div className={css.options}>
      <button onClick={() => onUpdate('good')}>Good</button>
      <button onClick={() => onUpdate('neutral')}>Neutral</button>
      <button onClick={() => onUpdate('bad')}>Bad</button>
      {total > 0 && <button onClick={() => onUpdate('reset')}>Reset</button>}
    </div>
  );
};

Options.propTypes = {
  onUpdate: PropTypes.func,
  total: PropTypes.number,
};

export default Options;
