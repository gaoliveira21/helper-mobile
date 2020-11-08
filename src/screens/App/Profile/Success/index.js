import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Container, Title, AccessButton, AccessButtonText } from './styles';

const Success = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Title>Operação realizada com sucessso!</Title>
      <Feather name="check-circle" size={156} color="#6FCF97" />
      <AccessButton onPress={() => navigation.navigate('Profile')}>
        <AccessButtonText>Voltar ao perfil</AccessButtonText>
      </AccessButton>
    </Container>
  );
};

export default Success;
