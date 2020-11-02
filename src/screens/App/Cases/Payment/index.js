import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, ScrollView } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

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

const Payment = () => {
  const navigation = useNavigation();

  const [isSelected, setSelection] = useState(false);

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

        <TouchableOpacity onPress={() => {}}>
          <RegisterCreditCard>
            <MaterialIcons name="add" size={24} color="#5B5F97" />
            <AddCardButton>Adicionar cartão</AddCardButton>
          </RegisterCreditCard>
        </TouchableOpacity>

        <Title>Valor da doação</Title>
        <DividerTitle />

        <ContentBox>
          <Input
            label="Valor (R$)"
            placeholder="R$ 0,00"
            icon={({ color }) => (
              <MaterialIcons name="person" size={24} color={color} />
            )}
            error=""
          />
        </ContentBox>

        <CheckAnonymous>
          <Check value={isSelected} onValueChange={setSelection} />
          <CheckText>Tornar essa doação anônima</CheckText>
        </CheckAnonymous>

        <ConfirmButton onPress={() => {}}>
          <TextButton>Confirmar doação</TextButton>
        </ConfirmButton>
      </Container>
    </ScrollView>
  );
};

export default Payment;
