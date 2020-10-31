import React from 'react';
import { View, Text } from 'react-native';

import { Container } from './styles';

import Header from '../../../components/Header';
import CaseItem from '../../../components/CaseItem';

const Cases = () => {
  return (
    <>
      <Header title='Casos' description='Doe para algum caso e torne o dia de alguém mais feliz'></Header>
      <Container>
        <CaseItem></CaseItem>
      </Container>
    </> 
  );
}

export default Cases;