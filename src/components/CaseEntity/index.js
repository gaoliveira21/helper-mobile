import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Card, Container, ImageContent, EntityImage, Name, Initials, Description, ProfileButton, TextButton } from './styles';

import Negoney from '../../assets/negoney.jpg';

const CaseEntity = ({ imageEntity, name, initials, description }) => {
  const navigation = useNavigation();

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
      <ProfileButton onPress={() => navigation.navigate('Details')}>
        <TextButton>Ver Perfil</TextButton>
      </ProfileButton>
    </Card>
  );
}

export default CaseEntity;