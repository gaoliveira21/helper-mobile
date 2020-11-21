import React, { useState, useRef, useEffect } from 'react';
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
  const [card, setCard] = useState(null);

  useEffect(() => {
    async function loadCard() {
      const response = await api.get('/donators/cards');
      setCard(response.data[0] || null);
    }

    loadCard();
  }, []);

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
        <Title>Cartão selecionado</Title>
        <DividerTitle />

        {card && (
          <CreditCardBox>
            <MaterialIcons name="credit-card" size={36} color="#5B5F97" />
            <TextContent>
              <NameCard>{card.nickname}</NameCard>
              <NumberCard>
                {card.number.replace(/\d{12}/g, '************')}
              </NumberCard>
            </TextContent>
          </CreditCardBox>
        )}

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
          <TouchableOpacity onPress={() => setSelection(!isSelected)}>
            <CheckText>Tornar essa doação anônima</CheckText>
          </TouchableOpacity>
        </CheckAnonymous>

        <ConfirmButton onPress={() => formRef.current.submitForm()}>
          <TextButton>Confirmar doação</TextButton>
        </ConfirmButton>
      </Container>
    </ScrollView>
  );
};

export default Payment;
