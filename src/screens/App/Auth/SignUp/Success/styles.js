import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  width: 100%;
  flex: 1;
  padding: 25px;
  justify-content: center;
  align-items: center;
  background: #f9f9f9;
`;

export const Title = styled.Text`
  color: #263238;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

export const AccessButton = styled(RectButton)`
  background: #ff6b6c;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 8px;
  margin: 30px 0;
  width: 80%;
`;

export const AccessButtonText = styled.Text`
  font-weight: bold;
  color: #fff;
  font-size: 16px;
`;
