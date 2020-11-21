import React, { useMemo, useState } from 'react';
import { View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

import api from '../../../services/api';
import { formatPrice } from '../../../utils/format';
import { useAuth } from '../../../hooks/auth';

import {
  Container,
  Header,
  ImageContent,
  ProfileImage,
  TotalDonations,
  SmallText,
  MediumText,
  Total,
  Value,
} from './styles';

import Mestre from '../../../assets/mestre.png';

const Dashboard = () => {
  const [dashboard, setDashboard] = useState({});
  const auth = useAuth();

  const formattedDonationAmount = useMemo(
    () => formatPrice(dashboard.donationAmount / 100),
    [dashboard]
  );

  useFocusEffect(() => {
    async function loadDashboard() {
      const response = await api.get('/donators/dashboard');
      setDashboard(response.data);
    }

    loadDashboard();
  }, []);

  return (
    <>
      <Header>
        <ImageContent>
          {/*
            Validar se tiver imagem
            {<ProfileImage source={Mestre} />}
          */}
          <MaterialIcons name="person" size={48} color="#fff" />
        </ImageContent>
        <SmallText>Bem-vindo</SmallText>
        <MediumText>{auth.user.full_name}</MediumText>
      </Header>
      <Container>
        <TotalDonations>
          <FontAwesome5 name="coins" size={64} color="#ff6b6c" />
          <View>
            <Total>Total doado</Total>
            <Value>R$ {formattedDonationAmount}</Value>
          </View>
        </TotalDonations>
      </Container>
    </>
  );
};

export default Dashboard;
