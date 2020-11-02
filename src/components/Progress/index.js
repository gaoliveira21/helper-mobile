import React from 'react';
import PropTypes from 'prop-types';

import { ProgressBar, CurrentProgress, Value, ValueCollected } from './styles';

const Progress = ({ value, valueCollected }) => {
  return (
    <ProgressBar>
      <Value>R$ {value}</Value>
      <CurrentProgress>
        <ValueCollected>R$ {valueCollected}</ValueCollected>
      </CurrentProgress>
    </ProgressBar>
  );
};

Progress.propTypes = {
  value: PropTypes.number.isRequired,
  valueCollected: PropTypes.number.isRequired,
};

export default Progress;
