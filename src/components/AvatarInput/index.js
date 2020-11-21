import React from 'react';
import PropTypes from 'prop-types';

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
        {/*
          Validar se tem imagem
          <ProfileImage source={image || Mestre} />
        */}
        <MaterialIcons name="person" size={64} color="#fff" />
      </ImageContent>
      <EditButton>
        <MaterialIcons name="edit" color="#FFF" size={32} />
      </EditButton>
    </ImageContainer>
  );
};

AvatarInput.propTypes = {
  image: PropTypes.string,
};

AvatarInput.defaultProps = {
  image: null,
};

export default AvatarInput;
