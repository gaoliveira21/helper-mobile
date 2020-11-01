import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  width: 100%;
  flex: 1;
  padding: 25px;
  justify-content: center;
  background: #F9F9F9;
`;

export const Title = styled.Text`
  font-size: 46px;
  color: #FF6B6C;
  font-weight: bold;
`;

export const Description = styled.Text`
  font-size: 18px;
  max-width: 70%;
  text-align: left;
  color: #999999;
`;

export const Form = styled.View`
  width: 100%;
`;

export const ConfirmationButton = styled(RectButton)`
  background: #FF6B6C;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 8px;
  margin: 10px 0;
`;

export const ConfirmationButtonText = styled.Text`
  font-weight: bold;
  color: #fff;
  font-size: 16px;
`;
