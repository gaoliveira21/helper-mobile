import React, { useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import * as Yup from 'yup';
import { MaterialIcons } from '@expo/vector-icons';

import { useAuth } from '../../../../hooks/auth';
import errors from '../../../../utils/errors';
import Input from '../../../../components/Input';

import { Container, FormBlock, Button, TextButton } from './styles';

const ChangePassword = () => {
  const formRef = useRef();
  const auth = useAuth();
  const navigation = useNavigation();

  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        oldPassword: Yup.string()
          .min(6, 'O campo senha precisa ter no minimo 6 caracteres')
          .required('O campo senha secreta atual é obrigatório'),
        password: Yup.string()
          .min(6, 'O campo senha precisa ter no minimo 6 caracteres')
          .required('O campo Nova senha é obrigatório'),
        confirmPassword: Yup.string().when('password', (password, field) =>
          password
            ? field
                .required('O campo confirmar senha é obrigatorio')
                .oneOf(
                  [Yup.ref('password')],
                  'O campo confirmar senha e nova senha precisam ser iguais'
                )
            : field
        ),
      });

      await schema.validate(data, { abortEarly: false });

      await auth.changePassword(data);
      navigation.navigate('Success');
    } catch (err) {
      errors(err, formRef);
    }
  }

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <FormBlock>
          <Input
            label="Senha atual"
            placeholder="Insira sua senha atual"
            icon={({ color }) => (
              <MaterialIcons name="remove-red-eye" size={24} color={color} />
            )}
            secureTextEntry
            name="oldPassword"
          />
          <Input
            label="Nova senha"
            placeholder="Insira sua nova senha"
            icon={({ color }) => (
              <MaterialIcons name="remove-red-eye" size={24} color={color} />
            )}
            secureTextEntry
            name="password"
          />
          <Input
            label="Confirmar nova senha"
            placeholder="Confirme sua nova senha"
            icon={({ color }) => (
              <MaterialIcons name="remove-red-eye" size={24} color={color} />
            )}
            secureTextEntry
            name="confirmPassword"
          />

          <Button color="#FF6B6C" onPress={() => formRef.current.submitForm()}>
            <MaterialIcons name="lock" color="#FFF" size={24} />
            <TextButton>Alterar Senha</TextButton>
          </Button>
        </FormBlock>
      </Form>
    </Container>
  );
};

export default ChangePassword;
