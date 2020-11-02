import React from 'react';
import { View } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import {
  ImageContainer,
  ImageContent,
  ProfileImage,
  EditButton,
} from './styles';

import Mestre from '../../assets/mestre.png';

const AvatarInput = ({ image }) => {
  return (
    <ImageContainer>
      <ImageContent>
        <ProfileImage source={Mestre} />
      </ImageContent>
      <EditButton>
        <MaterialIcons name="edit" color="#FFF" size={32} />
      </EditButton>
    </ImageContainer>
  );
};

export default AvatarInput;
