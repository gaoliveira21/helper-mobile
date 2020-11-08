import React, { useEffect, useMemo, useState } from 'react';
import { View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import api from '../../../services/api';
import { formatPrice } from '../../../utils/format';
import { useAuth } from '../../../hooks/auth';

import {
  Container,
  Header,
  TotalDonations,
  SmallText,
  MediumText,
  LargeBoldText,
} from './styles';

const Dashboard = () => {
  const [dashboard, setDashboard] = useState({});
  const auth = useAuth();

  const formattedDonationAmount = useMemo(
    () => formatPrice(dashboard.donationAmount),
    [dashboard]
  );

  useEffect(() => {
    async function loadDashboard() {
      const response = await api.get('/donators/dashboard');
      setDashboard(response.data);
    }

    loadDashboard();
  }, []);

  return (
    <>
      <Header>
        <SmallText>Bem-vindo,</SmallText>
        <MediumText>{auth.user.full_name}</MediumText>
      </Header>
      <Container>
        <TotalDonations>
          <FontAwesome5 name="coins" size={64} color="#FFF" />
          <View>
            <SmallText>Total doado</SmallText>
            <LargeBoldText>{formattedDonationAmount}</LargeBoldText>
          </View>
        </TotalDonations>
      </Container>
    </>
  );
};

export default Dashboard;
