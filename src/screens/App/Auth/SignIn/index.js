import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import Input from '../../../../components/Input';

import {
  Container,
  Title,
  Form,
  SubmitButton,
  SignUpButton,
  ForgotPasswordText,
  ClickHere,
  ButtonText
} from './styles';

const SignIn = () => {
  return (
    <Container>
      <Title>Login</Title>
      <Form>
        <Input
          label="Email"
          placeholder="example@mail.com"
          placeholderTextColor="#999999"
          icon={({ color }) => <MaterialIcons name="email" size={24} color={color} />}
          error=''
        />

        <Input
          label="Senha"
          placeholder="***********"
          placeholderTextColor="#999999"
          icon={({ color }) => <MaterialIcons name="remove-red-eye" size={24} color={color}/>}
          error=''
        />
        <SubmitButton>
          <ButtonText>Entrar</ButtonText>
        </SubmitButton>
        <SignUpButton>
          <ButtonText>Cadastrar-se</ButtonText>
        </SignUpButton>
      </Form>
      <ForgotPasswordText>
        Esqueceu sua senha? <ClickHere>Clique aqui</ClickHere>
      </ForgotPasswordText>
    </Container>
  );
}

export default SignIn;