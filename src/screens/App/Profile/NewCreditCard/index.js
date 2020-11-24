import React, { useRef } from 'react';
import { ScrollView } from 'react-native';
import { Form } from '@unform/mobile';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';
import { MaterialIcons } from '@expo/vector-icons';

import api from '../../../../services/api';
import errors from '../../../../utils/errors';
import Input from '../../../../components/Input';

import { Container, FormBlock, Button, TextButton } from './styles';

const ChangePassword = () => {
  const formRef = useRef(null);
  const navigation = useNavigation();

  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        nickname: Yup.string().required(
          'O campo Apelido do cartão é obrigatório'
        ),
        number: Yup.string()
          .matches(/^\d{16}$/g, 'Número do cartão inválido')
          .required('O campo Número do cartão é obrigatório'),
        cvv: Yup.string()
          .matches(/^\d{3}$/g, 'CVV inválido')
          .required('O campo CVV é obrigatório'),
        cpf: Yup.string()
          .matches(/^\d{11}$/g, 'CPF inválido')
          .required('O campo CPF é obrigatório'),
        expiration_date: Yup.string()
          .matches(/^\d{2}\/\d{2}$/g, 'Data de validade inválida')
          .required('O campo Data de validade é obrigatório'),
      });

      await schema.validate(data, { abortEarly: false });

      await api.post('/donators/cards', data);

      navigation.goBack();
    } catch (err) {
      errors(err, formRef);
    }
  }

  return (
    <ScrollView>
      <Container>
        <Form ref={formRef} onSubmit={handleSubmit}>
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
              maxLength={11}
            />
            <Input
              label="Data de validade"
              placeholder="MM/YY"
              icon={({ color }) => (
                <MaterialIcons name="date-range" size={24} color={color} />
              )}
              name="expiration_date"
              maxLength={5}
            />
            <Input
              label="Número do cartão"
              placeholder="xxxx xxxx xxxx xxxx"
              icon={({ color }) => (
                <MaterialIcons name="credit-card" size={24} color={color} />
              )}
              name="number"
              maxLength={16}
            />
            <Input
              label="CVV"
              placeholder="xxx"
              icon={({ color }) => (
                <MaterialIcons name="credit-card" size={24} color={color} />
              )}
              name="cvv"
              maxLength={3}
            />

            <Button
              color="#FF6B6C"
              onPress={() => formRef.current.submitForm()}
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
