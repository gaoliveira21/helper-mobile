import React from 'react';
import { View } from 'react-native';

import { ImageContainer, ImageContent, ProfileImage, EditButton } from './styles';

import Mestre from '../../assets/mestre.png';

import { MaterialIcons } from '@expo/vector-icons'; 


const AvatarInput = ({ image }) => {
  return (
    <ImageContainer>
      <ImageContent>
        <ProfileImage source={Mestre}></ProfileImage>
      </ImageContent>
      <EditButton>
        <MaterialIcons name="edit" color="#FFF" size={32}/>
      </EditButton>
    </ImageContainer>
  );
}

export default AvatarInput;