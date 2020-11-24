import React, { useRef } from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { MaterialIcons } from '@expo/vector-icons';
import * as Yup from 'yup';

import errors from '../../../../../utils/errors';
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

  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});
      const schema = Yup.object().shape({
        full_name: Yup.string().required('O campo Nome completo é obrigatório'),
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

      const { full_name, email, password } = data;
      navigation.navigate('SignUpStep2', { full_name, email, password });
    } catch (err) {
      errors(err, formRef);
    }
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
            autoCapitalize="none"
            autoCorrect={false}
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
          <NextButton onPress={() => formRef.current.submitForm()}>
            <NextButtonText>Próximo</NextButtonText>
          </NextButton>
        </FormBlock>
      </Form>
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <HaveAccountText>
          Já possui cadastro?
          <ClickHere> Acessar o app</ClickHere>
        </HaveAccountText>
      </TouchableOpacity>
    </Container>
  );
};

export default Step1;
