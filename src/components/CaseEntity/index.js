import React from 'react';
import { View, Image, Text } from 'react-native';

import { Card, Container, ImageContent, EntityImage, Name, Initials, Description, ProfileButton, TextButton } from './styles';

import Negoney from '../../assets/negoney.jpg';

const CaseEntity = ({ imageEntity, name, initials, description }) => {
  return (
    <Card>
      <ImageContent>
        <EntityImage source={Negoney}></EntityImage>
      </ImageContent>
      <Container>
        <Name>{name}</Name>
        <Initials>{initials}</Initials>
        <Description>{description}</Description>
      </Container>
      <ProfileButton><TextButton>Ver Perfil</TextButton></ProfileButton>
    </Card>
  );
}

export default CaseEntity;