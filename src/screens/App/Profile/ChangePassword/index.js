import React, { useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';

import { MaterialIcons } from '@expo/vector-icons';

import Input from '../../../../components/Input';

import { Container, FormBlock, Button, TextButton } from './styles';

const ChangePassword = () => {
  const formRef = useRef();
  const navigation = useNavigation();

  return (
    <Container>
      <Form ref={formRef}>
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

          <Button
            color="#FF6B6C"
            onPress={() => navigation.navigate('Success')}
          >
            <MaterialIcons name="lock" color="#FFF" size={24} />
            <TextButton>Alterar Senha</TextButton>
          </Button>
        </FormBlock>
      </Form>
    </Container>
  );
};

export default ChangePassword;
