import React from 'react';

import { View } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';

import {
  Container,
  Header,
  TotalDonations,
  SmallText,
  MediumText,
  LargeBoldText,
} from './styles';

const Dashboard = () => {
  return (
    <>
      <Header>
        <SmallText>Bem-vindo,</SmallText>
        <MediumText>Pedro Lucas José de Oliveira</MediumText>
      </Header>
      <Container>
        <TotalDonations>
          <FontAwesome5 name="coins" size={64} color="#FFF" />
          <View>
            <SmallText>Total doado</SmallText>
            <LargeBoldText>R$ 354,00</LargeBoldText>
          </View>
        </TotalDonations>
      </Container>
    </>
  );
};

export default Dashboard;
