import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons'; 

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: #F9F9F9;
  flex: 1;
  width: 100%;
`;

export const LogoText = styled.Text`
  font-family: 'Roboto';
  color: #FF6B6C;
  font-size: 56px;
  font-weight: bold;
`;

export const LoadingImage = styled.Image`
  width: 100%;
`

export const LoadingIcon = styled(AntDesign).attrs({
  name: 'loading1',
  size: 34,
})`
  color: #FF6B6C;
`
export const LoadingText = styled.Text`
  color: #263238;
  font-size: 14px;
  margin-top: 8px;
  font-weight: bold;
  font-family: 'Roboto';
`;