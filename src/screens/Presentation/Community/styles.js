import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
  padding: 0 48px;
  background: #F9F9F9;
`;

export const LogoText = styled.Text` 
  font-family: 'Roboto';
  color: #FF6B6C;
  font-size: 56px;
  font-weight: bold;
  margin: 48px 0;
`;

export const Image = styled.Image`
  width: 100%;
  margin-bottom: 12px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #263238;
  font-weight: bold;
`;

export const Description = styled.Text`
  font-size: 14px;
  color: #999999;
  text-align: center;
`;

export const RowButtons = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 48px 0;
`;

export const BackText = styled.Text`
  color: #5B5F97;
  font-weight: bold;
  font-size: 16px;
`;

export const NextButton = styled(RectButton)`
  background-color: #FF6B6C;
  padding: 12px 18px;
  border-radius: 8px;
`;

export const TextButton = styled.Text`
  font-weight: bold;
  color: #FFF;
`;

export const RowSteps = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Step1 = styled.View`
  width: 24px;
  height: 24px;
  border-radius: 24px;
  background-color: #999999;
  margin: 0 24px;
`;
export const Step2 = styled.View`
  width: 24px;
  height: 24px;
  border-radius: 24px;
  background-color: #999999;
  margin: 0 24px;
`;
export const Step3 = styled.View`
  width: 24px;
  height: 24px;
  border-radius: 24px;
  background-color: #FF6B6C;
  margin: 0 24px;
`;