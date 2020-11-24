import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import api from '../../../../services/api';

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
  const [cards, setCards] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    async function loadCards() {
      const response = await api.get('/donators/cards');
      setCards(response.data);
    }

    loadCards();
  }, []);

  return (
    <Container>
      <Title>Cartões cadastrados</Title>
      <DividerTitle />

      {cards.length > 0 && (
        <FlatList
          data={cards}
          keyExtractor={(card) => String(card.id)}
          renderItem={({ item }) => (
            <CreditCardBox>
              <MaterialIcons name="credit-card" size={36} color="#5B5F97" />
              <TextContent>
                <NameCard>{item.nickname}</NameCard>
                <NumberCard>
                  {item.number.replace(/\d{12}/g, '************')}
                </NumberCard>
              </TextContent>
            </CreditCardBox>
          )}
        />
      )}

      <TouchableOpacity onPress={() => navigation.navigate('NewCreditCard')}>
        <RegisterCreditCard>
          <MaterialIcons name="add" size={36} color="#263238" />
          <TextButton>Adicionar cartão</TextButton>
        </RegisterCreditCard>
      </TouchableOpacity>
    </Container>
  );
};

export default CreditCard;
