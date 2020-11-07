import React, { useRef } from 'react';
import { Form } from '@unform/mobile';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import Input from '../../../../components/Input';

import {
  Container,
  Title,
  SubmitButton,
  SignUpButton,
  ForgotPasswordText,
  ClickHere,
  ButtonText,
} from './styles';

const SignIn = () => {
  const formRef = useRef(null);
  const navigation = useNavigation();

  function handleSubmit() {
    // console.log(data);
  }

  return (
    <Container>
      <Title>Login</Title>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          name="email"
          label="Email"
          placeholder="example@mail.com"
          icon={({ color }) => (
            <MaterialIcons name="email" size={24} color={color} />
          )}
        />

        <Input
          name="password"
          secureTextEntry
          label="Senha"
          placeholder="***********"
          icon={({ color }) => (
            <MaterialIcons name="remove-red-eye" size={24} color={color} />
          )}
        />
        <SubmitButton onPress={() => formRef.current.submitForm()}>
          <ButtonText>Entrar</ButtonText>
        </SubmitButton>
        <SignUpButton onPress={() => navigation.navigate('SignUpStep1')}>
          <ButtonText>Cadastrar-se</ButtonText>
        </SignUpButton>
      </Form>
      <ForgotPasswordText>
        Esqueceu sua senha? <ClickHere>Clique aqui</ClickHere>
      </ForgotPasswordText>
    </Container>
  );
};

export default SignIn;
