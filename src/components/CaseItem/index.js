import React from 'react';
import { View, Image, Text } from 'react-native';

import { Container, Card, Date, Title, Entity, Description } from './styles';

import Progress from '../Progress';

const CaseItem = () => {
  return (
    <Card>
      <Image></Image>
      <Date>12/10/2000</Date>
      <Title>Titulo do caso</Title>
      <Entity>Por nome da instituição</Entity>
      <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a nibh a turpis tristique mattis.</Description>
      <Progress></Progress>
      <View><Text>DOAR</Text></View>
    </Card>
  );
}

export default CaseItem;