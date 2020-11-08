import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { formatPrice } from '../../utils/format';

import { ProgressBar, CurrentProgress, Value, ValueCollected } from './styles';

const Progress = ({ value, valueCollected }) => {
  const formattedValue = useMemo(() => formatPrice(value), [value]);
  const formattedValueCollected = useMemo(() => formatPrice(valueCollected), [
    valueCollected,
  ]);

  return (
    <ProgressBar>
      <Value>R$ {formattedValue}</Value>
      <CurrentProgress>
        <ValueCollected>R$ {formattedValueCollected}</ValueCollected>
      </CurrentProgress>
    </ProgressBar>
  );
};

Progress.propTypes = {
  value: PropTypes.number.isRequired,
  valueCollected: PropTypes.number.isRequired,
};

export default Progress;
