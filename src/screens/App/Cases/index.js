import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { Container } from './styles';

import { useAuth } from '../../../hooks/auth';
import api from '../../../services/api';
import Header from '../../../components/Header';
import CaseItem from '../../../components/CaseItem';

const Cases = () => {
  const [cases, setCases] = useState([]);
  const { user } = useAuth();

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

    loadCases();
  }, [user]);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Header
        title="Casos"
        description="Doe para algum caso e torne o dia de alguém mais feliz"
      />
      <Container>
        {cases.map((c) => (
          <CaseItem
            key={c.id}
            imageCase=""
            caseDate={c.createdAt}
            title={c.title}
            entity={c.owner.name}
            description={c.description}
            caseValue={c.value}
            caseValueCollected={c.value_collected}
          />
        ))}
      </Container>
    </ScrollView>
  );
};

export default Cases;
