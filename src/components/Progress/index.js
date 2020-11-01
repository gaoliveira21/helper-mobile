import React from 'react';
import { View, Text } from 'react-native';

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
}

export default Progress;