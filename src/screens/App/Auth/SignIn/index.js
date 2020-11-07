import React, { useRef } from 'react';
import { Form } from '@unform/mobile';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import * as Yup from 'yup';

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

  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('O campo email precisa ser um email válido')
          .required('O campo email é obrigatório'),

        password: Yup.string()
          .min(6, 'O campo senha precisa ter ao menos 6 caracteres')
          .required('O campo senha é obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });

        formRef.current.setErrors(validationErrors);
      }
    }
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
          autoCapitalize="none"
          autoCorrect={false}
        />

        <Input
          name="password"
          label="Senha"
          placeholder="***********"
          icon={({ color }) => (
            <MaterialIcons name="remove-red-eye" size={24} color={color} />
          )}
          secureTextEntry
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
