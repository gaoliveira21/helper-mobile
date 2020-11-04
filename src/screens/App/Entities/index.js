import React from 'react';

import { Container } from './styles';

import Header from '../../../components/Header';
import EntityProfile from '../../../components/EntityProfile';

const Entities = () => {
  return (
    <>
      <Header
        title="Entidades"
        description="Conheça as entidades mais próximas de você"
      />
      <Container>
        <EntityProfile
          imageEntity=""
          name="Nome da entidade"
          initials="SIGLA"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat laoreet blandit. Maecenas vitae rutrum lectus."
        />
      </Container>
    </>
  );
};

export default Entities;
