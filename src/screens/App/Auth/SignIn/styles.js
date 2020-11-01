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
  color: #FF6B6C;
  font-weight: bold;
`;

export const Form = styled.View`
  width: 100%;
  margin-top: 36px;
`;

export const InputContent = styled.View`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Label = styled.Text`
  color: #263238;
  font-size: 16px;
`;

export const Input = styled.View`
  background: #DFE4EA;
  flex-direction: row;
  align-items: center;
  padding: 15px 10px;
  border-radius: 16px;
  margin: 5px 0;
  border: 1px solid transparent;
`;

export const Field = styled.TextInput`
  width: 90%;
`;

export const Error = styled.Text`
  color: #FF6B6C;
  font-size: 14px;
  height: 24px;
`;

export const SubmitButton = styled(RectButton)`
  background: #FF6B6C;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 8px;
  margin: 10px 0;
`;

export const SignUpButton = styled(RectButton)`
  background: #5B5F97;
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
  color: #5B5F97;
  font-size: 14px;
  margin-top: 25px;
  text-align: center;
`;

export const ClickHere = styled.Text`
  font-weight: bold;
`;
