import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const FormBlock = styled.View`
  padding: 24px;
  flex: 1;
`;

export const Button = styled(RectButton)`
  width: 100%;
  padding: 24px 0;
  background-color: ${(props) => props.color};

  border-radius: 8px;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-bottom: 24px;
`;

export const TextButton = styled.Text`
  color: #fff;
  margin-left: 8px;
  font-weight: bold;
`;

export const Divider = styled.View`
  height: 2px;
  width: 100%;
  background-color: #dfe4ea;

  margin-bottom: 24px;
`;

export const SignOut = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: flex-end;
`;

export const SignOutText = styled.Text`
  color: #ff6b6c;
  font-weight: bold;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-right: 10px;
`;
