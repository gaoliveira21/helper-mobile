import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background: #f9f9f9;
  flex: 1;
`;

export const FormBlock = styled.View`
  padding: 48px 24px;
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
