import React from 'react';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';

import {
  Card,
  Container,
  ImageContent,
  EntityImage,
  Name,
  Initials,
  Description,
  ProfileButton,
  TextButton,
} from './styles';

import Dog from '../../assets/dog.jpg';

const EntityProfile = ({ imageEntity, name, initials, description, id }) => {
  const navigation = useNavigation();

  return (
    <Card>
      <ImageContent>
        <EntityImage source={imageEntity || Dog} />
      </ImageContent>
      <Container>
        <Name>{name}</Name>
        <Initials>{initials}</Initials>
        <Description>{description}</Description>
      </Container>
      <ProfileButton onPress={() => navigation.navigate('Details', { id })}>
        <TextButton>Ver Perfil</TextButton>
      </ProfileButton>
    </Card>
  );
};

EntityProfile.propTypes = {
  imageEntity: PropTypes.string,
  name: PropTypes.string.isRequired,
  initials: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

EntityProfile.defaultProps = {
  imageEntity: null,
};

export default EntityProfile;
