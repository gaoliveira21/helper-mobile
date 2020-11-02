import React from 'react';
import { Feather } from '@expo/vector-icons';

import { Container, Title, AccessButton, AccessButtonText } from './styles';

const Success = () => {
  return (
    <Container>
      <Title>Cadastro realizado com sucessso!</Title>
      <Feather name="check-circle" size={156} color="#6FCF97" />
      <AccessButton>
        <AccessButtonText>Acessar o app</AccessButtonText>
      </AccessButton>
    </Container>
  );
};

export default Success;
