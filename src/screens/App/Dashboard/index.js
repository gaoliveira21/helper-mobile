import React, { useEffect, useMemo, useState } from 'react';
import { View } from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

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

const Dashboard = () => {
  const [dashboard, setDashboard] = useState({});
  const auth = useAuth();
  const navigation = useNavigation();

  const formattedDonationAmount = useMemo(
    () => formatPrice(dashboard.donationAmount / 100),
    [dashboard]
  );

  useEffect(() => {
    async function loadDashboard() {
      const response = await api.get('/donators/dashboard');
      setDashboard(response.data);
    }

    navigation.addListener('focus', () => {
      loadDashboard();
    });
  }, [navigation]);

  return (
    <>
      <Header>
        <ImageContent>
          {auth.user.avatar ? (
            <ProfileImage source={{ uri: auth.user.avatar.url }} />
          ) : (
            <MaterialIcons name="person" size={48} color="#fff" />
          )}
        </ImageContent>
        <SmallText>Bem-vindo</SmallText>
        <MediumText>{auth.user.full_name}</MediumText>
      </Header>
      <Container>
        <TotalDonations>
          <FontAwesome5 name="coins" size={64} color="#6fcf97" />
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
