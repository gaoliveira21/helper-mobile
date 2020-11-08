import React, { useRef } from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { MaterialIcons } from '@expo/vector-icons';

import Input from '../../../../../components/Input';

import {
  Container,
  Title,
  Description,
  FormBlock,
  NextButton,
  NextButtonText,
  HaveAccountText,
  ClickHere,
} from './styles';

const Step1 = () => {
  const formRef = useRef(null);
  const navigation = useNavigation();

  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <Container>
      <Title>Cadastrar-se</Title>
      <Description>Preencha os campos para concluir o cadastro.</Description>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <FormBlock>
          <Input
            label="Nome completo"
            placeholder="Insira seu nome completo"
            icon={({ color }) => (
              <MaterialIcons name="person" size={24} color={color} />
            )}
            name="full_name"
          />

          <Input
            label="Email"
            placeholder="example@mail.com"
            icon={({ color }) => (
              <MaterialIcons name="email" size={24} color={color} />
            )}
            name="email"
          />

          <Input
            label="Senha"
            placeholder="***********"
            secureTextEntry
            icon={({ color }) => (
              <MaterialIcons name="remove-red-eye" size={24} color={color} />
            )}
            name="password"
          />

          <NextButton onPress={() => navigation.navigate('SignUpStep2')}>
            <NextButtonText>Próximo</NextButtonText>
          </NextButton>
        </FormBlock>
      </Form>
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <HaveAccountText>
          Já possui cadastro?
          <ClickHere>Acessar o app</ClickHere>
        </HaveAccountText>
      </TouchableOpacity>
    </Container>
  );
};

export default Step1;
