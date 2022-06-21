import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
      <p className={s.element}>Good:{good}</p>
      <p className={s.element}>Neutral:{neutral}</p>
      <p className={s.element}>Bad:{bad}</p>
      <p className={s.element}>Total:{total}</p>
      <p className={s.element}>Positive feedback:{positivePercentage} %</p>
    </div>
  );
}

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
