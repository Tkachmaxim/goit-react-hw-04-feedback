import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={s.buttons}>
      {options.map(button => {
        return (
          <button
            onClick={onLeaveFeedback}
            id={button}
            key={button}
            className={s.button}
          >
            {button}
          </button>
        );
      })}
    </div>
  );
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
