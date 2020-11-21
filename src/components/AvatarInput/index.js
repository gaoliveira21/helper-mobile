import React, { useState } from 'react';
import { Platform, Alert } from 'react-native';
import PropTypes from 'prop-types';
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons } from '@expo/vector-icons';

import api from '../../services/api';

import { useAuth } from '../../hooks/auth';

import {
  ImageContainer,
  ImageContent,
  ProfileImage,
  EditButton,
} from './styles';

const AvatarInput = ({ img }) => {
  const [image, setImage] = useState(img);
  const auth = useAuth();

  const createFormData = (photo) => {
    // eslint-disable-next-line no-undef
    const data = new FormData();

    data.append('avatar', {
      name: photo.uri.match(/[^/]+$/)[0],
      type: 'image/*',
      uri: photo.uri,
    });

    return data;
  };

  async function handlePickImage() {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Precisamos da sua permissão para trocar de avatar');
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        const response = await api.post('/avatars', createFormData(result));

        await auth.changeAvatar({
          avatar: {
            id: response.data.id,
            filepath: response.data.filepath,
            url: response.data.url,
          },
        });
        setImage(result.uri);
      }
    }
  }

  return (
    <ImageContainer>
      <ImageContent>
        {image ? (
          <ProfileImage source={{ uri: image }} />
        ) : (
          <MaterialIcons name="person" size={64} color="#fff" />
        )}
      </ImageContent>
      <EditButton onPress={() => handlePickImage()}>
        <MaterialIcons name="edit" color="#FFF" size={32} />
      </EditButton>
    </ImageContainer>
  );
};

AvatarInput.propTypes = {
  img: PropTypes.string,
};

AvatarInput.defaultProps = {
  img: null,
};

export default AvatarInput;
