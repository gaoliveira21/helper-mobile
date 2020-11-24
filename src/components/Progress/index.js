import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { formatPrice } from '../../utils/format';

import {
  ProgressBar,
  CurrentProgress,
  ValueOut,
  Value,
  ValueCollected,
} from './styles';

const Progress = ({ value, valueCollected }) => {
  const formattedValue = useMemo(() => formatPrice(value), [value]);
  const formattedValueCollected = useMemo(() => formatPrice(valueCollected), [
    valueCollected,
  ]);

  return (
    <>
      <ValueOut>Valor total R$ {formattedValue}</ValueOut>
      <ProgressBar>
        <Value>R$ {formattedValue}</Value>
        <CurrentProgress percent={Math.ceil((valueCollected / value) * 100)}>
          <ValueCollected>R$ {formattedValueCollected}</ValueCollected>
        </CurrentProgress>
      </ProgressBar>
    </>
  );
};

Progress.propTypes = {
  value: PropTypes.number.isRequired,
  valueCollected: PropTypes.number.isRequired,
};

export default Progress;
