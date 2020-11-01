import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import Input from '../../../../../components/Input'

import { Container, Form, NextButton, NextButtonText } from './styles';

const Step2 = () => {
  return (
    <Container>
      <Form>
        <Input
          label="Telefone"
          placeholder="(XX) XXXXX-XXXX"
          placeholderTextColor="#999999"
          icon={({ color }) => <MaterialIcons name="local-phone" size={24} color={color} />}
          error=''
        />

        <Input
          label="Cidade"
          placeholder="Insira sua cidade"
          placeholderTextColor="#999999"
          icon={({ color }) => <MaterialIcons name="location-city" size={24} color={color} />}
          error=''
        />

        <Input
          label="Estado (UF)"
          placeholder="Insira seu estado"
          placeholderTextColor="#999999"
          icon={({ color }) => <MaterialIcons name="my-location" size={24} color={color} />}
          error=''
        />

        <NextButton>
          <NextButtonText>Próximo</NextButtonText>
        </NextButton>
      </Form>
    </Container>
  );
}

export default Step2;