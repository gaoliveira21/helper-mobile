import styled from 'styled-components/native';

import { Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const ImageContainer = styled.View`
  width: 180px;
  height: 180px;
  margin: 24px auto;
`;

export const ImageContent = styled.View`
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 180px;
  border-radius: 180px;
  overflow: hidden;
  position: relative;
`;

export const ProfileImage = styled(Image)`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const EditButton = styled(RectButton)`
  width: 56px;
  height: 56px;
  border-radius: 56px;
  background-color: #5b5f97;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 0;
`;
