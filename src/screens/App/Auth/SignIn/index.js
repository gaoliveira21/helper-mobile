import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import {
  Container,
  Title,
  Form,
  InputContent,
  Label,
  Input,
  Field,
  Error,
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
        <InputContent>
          <Label>Email</Label>
          <Input>
            <Field placeholder="example@mail.com" placeholderTextColor="#999999" />
            <MaterialIcons name="email" size={24} color="#999999" />
          </Input>
          <Error>Error message example</Error>
        </InputContent>

        <InputContent>
          <Label>Senha</Label>
          <Input>
            <Field placeholder="***********" placeholderTextColor="#999999" />
            <MaterialIcons name="remove-red-eye" size={24} color="#999999" />
          </Input>
          <Error>Error message example</Error>
        </InputContent>
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