import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  width: 100%;
  flex: 1;
  padding: 25px;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 56px;
  color: #ff6b6c;
  font-weight: bold;
`;

export const SubmitButton = styled(RectButton)`
  background: #ff6b6c;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 8px;
  margin: 10px 0;
`;

export const SignUpButton = styled(RectButton)`
  background: #5b5f97;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 8px;
  margin: 10px 0;
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  color: #fff;
  font-size: 16px;
`;

export const ForgotPasswordText = styled.Text`
  color: #5b5f97;
  font-size: 14px;
  margin-top: 25px;
  text-align: center;
`;

export const ClickHere = styled.Text`
  font-weight: bold;
`;
