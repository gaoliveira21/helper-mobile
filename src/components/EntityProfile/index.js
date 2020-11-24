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

const EntityProfile = ({ imageEntity, name, initials, description, id }) => {
  const navigation = useNavigation();

  return (
    <Card>
      {imageEntity ? (
        <ImageContent>
          <EntityImage source={{ uri: imageEntity }} />
        </ImageContent>
      ) : null}
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
