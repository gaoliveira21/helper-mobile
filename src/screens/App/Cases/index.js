import React from 'react';
import { ScrollView } from 'react-native';
import { Container } from './styles';

import Header from '../../../components/Header';
import CaseItem from '../../../components/CaseItem';

const Cases = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Header
        title="Casos"
        description="Doe para algum caso e torne o dia de alguém mais feliz"
      />
      <Container>
        <CaseItem
          imageCase=""
          caseDate="31/10/2020"
          title="Titulo do caso"
          entity="Por: Nome da instituição"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat laoreet blandit. Maecenas vitae rutrum lectus."
          caseValue={100}
          caseValueCollected={30}
        />

        <CaseItem
          imageCase=""
          caseDate="31/10/2020"
          title="Titulo do caso"
          entity="Por: Nome da instituição"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat laoreet blandit. Maecenas vitae rutrum lectus."
          caseValue={100}
          caseValueCollected={30}
        />
      </Container>
    </ScrollView>
  );
};

export default Cases;
