import styled from 'styled-components/native';
import { Image } from 'react-native';

export const Container = styled.View`
  background-color: #ff6b6c;
  flex: 1;
  justify-content: center;
  padding: 48px 24px;
`;

export const Title = styled.Text`
  font-size: 36px;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

export const ImageWinner = styled(Image)`
  width: 100%;
  margin: 0 auto;
`;

export const Congratulations = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

export const Description = styled.Text`
  color: #fff;
  margin-bottom: 48px;
  text-align: center;
`;

export const ContentButton = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-weight: bold;
`;
