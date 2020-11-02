import React from 'react';
import { TouchableOpacity } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import {
  Container,
  Title,
  DividerTitle,
  CreditCardBox,
  TextContent,
  NameCard,
  NumberCard,
  RegisterCreditCard,
  TextButton,
} from './styles';

const CreditCard = () => {
  return (
    <Container>
      <Title>Cartões cadastrados</Title>
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

      <TouchableOpacity>
        <RegisterCreditCard>
          <MaterialIcons name="add" size={36} color="#263238" />
          <TextButton>Adicionar cartão</TextButton>
        </RegisterCreditCard>
      </TouchableOpacity>
    </Container>
  );
};

export default CreditCard;
