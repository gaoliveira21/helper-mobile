import styled from 'styled-components/native';

export const ProgressBar = styled.View`
  width: 100%;
  height: 36px;
  padding: 0 8px;
  background-color: #dfe4ea;
  border-radius: 8px;
  justify-content: center;

  margin: 12px 0;
`;

export const Value = styled.Text`
  align-self: flex-end;
`;

export const ValueOut = styled.Text`
  align-self: flex-end;
  color: #999999;
`;
export const ValueCollected = styled.Text`
  align-self: flex-end;
  color: #fff;
`;

export const CurrentProgress = styled.View`
  position: absolute;
  width: ${(props) => (props.percent < 20 ? '25%' : `${props.percent}%`)};
  height: 100%;
  padding: 0 8px;
  justify-content: center;
  border-radius: 8px;
  background-color: ${(props) => (props.percent < 100 ? '#5b5f97' : '#6fcf97')};
`;
