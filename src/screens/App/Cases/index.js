import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container } from './styles';

import { useAuth } from '../../../hooks/auth';
import api from '../../../services/api';
import Header from '../../../components/Header';
import CaseItem from '../../../components/CaseItem';

const Cases = () => {
  const [cases, setCases] = useState([]);
  const { user } = useAuth();
  const navigation = useNavigation();

  useEffect(() => {
    async function loadCases() {
      const response = await api.get('/cases', {
        params: {
          state: user.state.toUpperCase(),
          city: user.city.toLowerCase(),
        },
      });

      setCases(response.data.cases);
    }

    navigation.addListener('focus', () => {
      loadCases();
    });
  }, [user, navigation]);

  return (
    <>
      <Header
        title="Casos"
        description="Doe para algum caso e torne o dia de alguém mais feliz"
      />
      <Container>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={cases}
          keyExtractor={(c) => String(c.id)}
          renderItem={({ item }) => (
            <CaseItem
              key={item.id}
              id={item.id}
              imageCase={item.files}
              caseDate={item.createdAt}
              title={item.title}
              entity={item.owner.name}
              description={item.description}
              caseValue={item.value}
              caseValueCollected={item.value_collected}
            />
          )}
        />
      </Container>
    </>
  );
};

export default Cases;
