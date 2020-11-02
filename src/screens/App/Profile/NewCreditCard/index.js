import React from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { MaterialIcons } from '@expo/vector-icons';

import Input from '../../../../components/Input';

import { Form, Button, TextButton } from './styles';

const ChangePassword = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <Form>
        <Input
          label="Apelido do cartão"
          placeholder="Adicione um nome para se lembrar"
          icon={({ color }) => (
            <MaterialIcons name="credit-card" size={24} color={color} />
          )}
          error=""
        />
        <Input
          label="Nome do titular"
          placeholder="Nome completo"
          icon={({ color }) => (
            <MaterialIcons name="person" size={24} color={color} />
          )}
          error=""
        />
        <Input
          label="CPF do titular"
          placeholder="xxx.xxx.xxx-xx"
          icon={({ color }) => (
            <MaterialIcons name="person" size={24} color={color} />
          )}
          error=""
        />
        <Input
          label="Data de validade"
          placeholder="MM/YYYY"
          icon={({ color }) => (
            <MaterialIcons name="date-range" size={24} color={color} />
          )}
          error=""
        />
        <Input
          label="Número do cartão"
          placeholder="xxxx xxxx xxxx xxxx"
          icon={({ color }) => (
            <MaterialIcons name="credit-card" size={24} color={color} />
          )}
          error=""
        />
        <Input
          label="CVV"
          placeholder="xxx"
          icon={({ color }) => (
            <MaterialIcons name="credit-card" size={24} color={color} />
          )}
          error=""
        />

        <Button color="#FF6B6C" onPress={() => navigation.navigate('Success')}>
          <MaterialIcons name="check" color="#FFF" size={24} />
          <TextButton>Cadastrar cartão</TextButton>
        </Button>
      </Form>
    </ScrollView>
  );
};

export default ChangePassword;
