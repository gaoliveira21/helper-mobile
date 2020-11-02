import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { MaterialIcons } from '@expo/vector-icons';

import Input from '../../../../components/Input';

import { Form, Button, TextButton } from './styles';

const ChangePassword = () => {
  const navigation = useNavigation();

  return (
    <Form>
      <Input
        label="Senha atual"
        placeholder="Insira sua senha atual"
        icon={({ color }) => (
          <MaterialIcons name="remove-red-eye" size={24} color={color} />
        )}
        error=""
      />
      <Input
        label="Nova senha"
        placeholder="Insira sua nova senha"
        icon={({ color }) => (
          <MaterialIcons name="remove-red-eye" size={24} color={color} />
        )}
        error=""
      />
      <Input
        label="Confirmar nova senha"
        placeholder="Confirme sua nova senha"
        icon={({ color }) => (
          <MaterialIcons name="remove-red-eye" size={24} color={color} />
        )}
        error=""
      />

      <Button color="#FF6B6C" onPress={() => navigation.navigate('Success')}>
        <MaterialIcons name="lock" color="#FFF" size={24} />
        <TextButton>Alterar Senha</TextButton>
      </Button>
    </Form>
  );
};

export default ChangePassword;
