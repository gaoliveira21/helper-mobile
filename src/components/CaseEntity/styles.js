import styled from 'styled-components/native';
import { Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Card = styled.View`
  background-color: #FFF;
  border-radius: 8px;
`;

export const Container = styled.View`
  padding: 24px;
`;

export const ImageContent = styled.View`
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 180px;
  border-radius: 180px;
  overflow: hidden;
  position: relative;

  margin: 24px auto 0;
`;

export const EntityImage = styled(Image)`
  position: absolute;
  width: 200px;
`;


export const Name = styled.Text`
  color: #263238;
  font-size: 24px;
  font-weight: 700;
`;

export const Initials = styled.Text`
  color: #FF6B6C;
  font-weight: 700;
`;

export const Description = styled.Text`
  color: #999999;
  line-height: 24px;
  margin: 12px 0;
  text-align: justify;
`;

export const ProfileButton = styled(RectButton)`
  width: 100%;
  padding: 24px 0;
  background-color: #6FCF97;

  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  color: #FFF;
  font-weight: bold;
`;