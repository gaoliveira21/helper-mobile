import React from 'react';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

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

const EntityProfile = ({ imageEntity, name, initials, description, id }) => {
  const navigation = useNavigation();

  return (
    <Card>
      <ImageContent>
        {imageEntity ? (
          <EntityImage source={{ uri: imageEntity }} />
        ) : (
          <MaterialIcons name="person" size={64} color="#fff" />
        )}
      </ImageContent>
      <Container>
        <Name>{name}</Name>
        <Initials>{initials}</Initials>
        <Description>{description}</Description>
      </Container>
      <ProfileButton onPress={() => navigation.navigate('Details', { id })}>
        <TextButton>VER PERFIL</TextButton>
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
