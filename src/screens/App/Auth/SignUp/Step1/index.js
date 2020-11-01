import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import Input from '../../../../../components/Input'

import {
  Container,
  Title,
  Description,
  Form,
  NextButton,
  NextButtonText,
  HaveAccountText,
  ClickHere
} from './styles';

const Step1 = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Title>Cadastrar-se</Title>
      <Description>Preencha os campos para concluir o cadastro.</Description>
      <Form>
        <Input
          label="Nome completo"
          placeholder="Insira seu nome completo"
          icon={({ color }) => <MaterialIcons name="person" size={24} color={color} />}
          error=''
        />

        <Input
          label="Email"
          placeholder="example@mail.com"
          icon={({ color }) => <MaterialIcons name="email" size={24} color={color} />}
          error=''
        />

        <Input
          label="Senha"
          placeholder="***********"
          placeholderTextColor="#999999"
          icon={({ color }) => <MaterialIcons name="remove-red-eye" size={24} color={color} />}
          error=''
        />

        <NextButton onPress={() => navigation.navigate('SignUpStep2')}>
          <NextButtonText>Próximo</NextButtonText>
        </NextButton>
      </Form>
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <HaveAccountText>
          Já possui cadastro? 
          <ClickHere>Acessar o app</ClickHere>
        </HaveAccountText>
      </TouchableOpacity>
    </Container>
  );
}

export default Step1;