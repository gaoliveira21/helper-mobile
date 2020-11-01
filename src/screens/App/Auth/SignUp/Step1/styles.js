import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  width: 100%;
  flex: 1;
  padding: 25px;
  justify-content: center;
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
  margin-top: 36px;
`;

export const NextButton = styled(RectButton)`
  background: #FF6B6C;
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

export const HaveAccountText = styled.Text`
  color: #5B5F97;
  font-size: 14px;
  margin-top: 25px;
  text-align: center;
`;

export const ClickHere = styled.Text`
  font-weight: bold;
`;
