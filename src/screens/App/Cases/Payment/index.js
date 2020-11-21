import React, { useState, useRef } from 'react';
import { Form } from '@unform/mobile';
import { useNavigation, useRoute } from '@react-navigation/native';
import { TouchableOpacity, ScrollView } from 'react-native';
import * as Yup from 'yup';
import { MaterialIcons } from '@expo/vector-icons';

import api from '../../../../services/api';

import {
  Container,
  ContentBox,
  Title,
  DividerTitle,
  CreditCardBox,
  TextContent,
  NameCard,
  NumberCard,
  RegisterCreditCard,
  AddCardButton,
  CheckAnonymous,
  Check,
  CheckText,
  ConfirmButton,
  TextButton,
} from './styles';

import Input from '../../../../components/Input';
import errors from '../../../../utils/errors';

const Payment = () => {
  const navigation = useNavigation();
  const { params } = useRoute();
  const formRef = useRef(null);
  const [isSelected, setSelection] = useState(false);

  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});
      const schema = Yup.object().shape({
        value: Yup.number().positive().required(),
      });
      await schema.validate(data, { abortEarly: false });

      await api.post(`/cases/${params.id}/donations`, {
        value: data.value,
        is_anonymous: isSelected,
      });

      navigation.navigate('Success');
    } catch (err) {
      errors(err, formRef);
    }
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container>
        <Title>Escolha o cartão</Title>
        <DividerTitle />

        <CreditCardBox>
          <MaterialIcons name="credit-card" size={36} color="#5B5F97" />
          <TextContent>
            <NameCard>Nome do cartão</NameCard>
            <NumberCard>Parte do número</NumberCard>
          </TextContent>
        </CreditCardBox>

        <CreditCardBox>
          <MaterialIcons name="credit-card" size={36} color="#5B5F97" />
          <TextContent>
            <NameCard>Nome do cartão</NameCard>
            <NumberCard>Parte do número</NumberCard>
          </TextContent>
        </CreditCardBox>

        <TouchableOpacity onPress={() => navigation.navigate('NewCreditCard')}>
          <RegisterCreditCard>
            <MaterialIcons name="add" size={24} color="#5B5F97" />
            <AddCardButton>Adicionar cartão</AddCardButton>
          </RegisterCreditCard>
        </TouchableOpacity>

        <Title>Valor da doação</Title>
        <DividerTitle />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <ContentBox>
            <Input
              label="Valor (R$)"
              placeholder="R$ 0,00"
              icon={({ color }) => (
                <MaterialIcons name="person" size={24} color={color} />
              )}
              name="value"
            />
          </ContentBox>
        </Form>

        <CheckAnonymous>
          <Check value={isSelected} onValueChange={setSelection} />
          <CheckText>Tornar essa doação anônima</CheckText>
        </CheckAnonymous>

        <ConfirmButton onPress={() => formRef.current.submitForm()}>
          <TextButton>Confirmar doação</TextButton>
        </ConfirmButton>
      </Container>
    </ScrollView>
  );
};

export default Payment;
