import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  width: 100%;
  flex: 1;
  padding: 25px;
  justify-content: center;
  background: #f9f9f9;
`;

export const FormBlock = styled.View`
  width: 100%;
`;

export const NextButton = styled(RectButton)`
  background: #ff6b6c;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 8px;
  margin: 10px 0;
`;

export const NextButtonText = styled.Text`
  font-weight: bold;
  color: #fff;
  font-size: 16px;
`;
