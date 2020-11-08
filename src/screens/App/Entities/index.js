import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import { useAuth } from '../../../hooks/auth';
import api from '../../../services/api';
import Header from '../../../components/Header';
import EntityProfile from '../../../components/EntityProfile';

import { Container } from './styles';

const Entities = () => {
  const { user } = useAuth();
  const [entities, setEntities] = useState([]);

  useEffect(() => {
    async function loadEntities() {
      const response = await api.get('/entities', {
        params: {
          state: user.state.toUpperCase(),
          city: user.city.toLowerCase(),
        },
      });

      setEntities(response.data.profiles);
    }

    loadEntities();
  }, [user]);

  return (
    <>
      <Header
        title="Entidades"
        description="Conheça as entidades mais próximas de você"
      />
      <Container>
        <FlatList
          data={entities}
          keyExtractor={(entity) => String(entity.id)}
          renderItem={({ item }) => (
            <EntityProfile
              imageEntity=""
              name={item.entity.name}
              initials={item.initials}
              description={item.description}
              id={item.entity.id}
            />
          )}
        />
      </Container>
    </>
  );
};

export default Entities;
