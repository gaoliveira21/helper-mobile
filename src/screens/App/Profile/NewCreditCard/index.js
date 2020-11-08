import React, { useRef } from 'react';
import { ScrollView } from 'react-native';
import { Form } from '@unform/mobile';
import { useNavigation } from '@react-navigation/native';

import { MaterialIcons } from '@expo/vector-icons';

import Input from '../../../../components/Input';

import { Container, FormBlock, Button, TextButton } from './styles';

const ChangePassword = () => {
  const formRef = useRef(null);
  const navigation = useNavigation();

  return (
    <ScrollView>
      <Container>
        <Form ref={formRef}>
          <FormBlock>
            <Input
              label="Apelido do cartão"
              placeholder="Adicione um nome para se lembrar"
              icon={({ color }) => (
                <MaterialIcons name="credit-card" size={24} color={color} />
              )}
              name="nickname"
            />
            <Input
              label="CPF do titular"
              placeholder="xxx.xxx.xxx-xx"
              icon={({ color }) => (
                <MaterialIcons name="person" size={24} color={color} />
              )}
              name="cpf"
            />
            <Input
              label="Data de validade"
              placeholder="MM/YYYY"
              icon={({ color }) => (
                <MaterialIcons name="date-range" size={24} color={color} />
              )}
              name="expiration_date"
            />
            <Input
              label="Número do cartão"
              placeholder="xxxx xxxx xxxx xxxx"
              icon={({ color }) => (
                <MaterialIcons name="credit-card" size={24} color={color} />
              )}
              name="number"
            />
            <Input
              label="CVV"
              placeholder="xxx"
              icon={({ color }) => (
                <MaterialIcons name="credit-card" size={24} color={color} />
              )}
              name="cvv"
            />

            <Button
              color="#FF6B6C"
              onPress={() => navigation.navigate('Success')}
            >
              <MaterialIcons name="check" color="#FFF" size={24} />
              <TextButton>Cadastrar cartão</TextButton>
            </Button>
          </FormBlock>
        </Form>
      </Container>
    </ScrollView>
  );
};

export default ChangePassword;
