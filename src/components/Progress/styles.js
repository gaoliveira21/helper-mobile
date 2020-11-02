import styled from 'styled-components/native';

export const ProgressBar = styled.View`
  width: 100%;
  height: 36px;
  margin: 12px 0;
  padding: 0 8px;
  background-color: #dfe4ea;
  border-radius: 8px;
  justify-content: center;
`;

export const Value = styled.Text`
  align-self: flex-end;
`;
export const ValueCollected = styled.Text`
  align-self: flex-end;
  color: #fff;
`;

export const CurrentProgress = styled.View`
  position: absolute;
  width: 30%;
  height: 100%;
  padding: 0 8px;
  justify-content: center;
  border-radius: 8px;
  background-color: #5b5f97;
`;
