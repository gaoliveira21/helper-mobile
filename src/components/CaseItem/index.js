import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Card,
  Container,
  ImageContent,
  CaseImage,
  Date,
  Title,
  Entity,
  Description,
  DonateButton,
  TextButton,
} from './styles';

import Progress from '../Progress';

import Negoney from '../../assets/negoney.jpg';

const CaseItem = ({
  caseDate,
  title,
  entity,
  description,
  caseValue,
  caseValueCollected,
}) => {
  const navigation = useNavigation();

  return (
    <Card>
      <ImageContent>
        <CaseImage source={Negoney} />
      </ImageContent>
      <Container>
        <Date>{caseDate}</Date>
        <Title>{title}</Title>
        <Entity>{entity}</Entity>
        <Description>{description}</Description>
        <Progress value={caseValue} valueCollected={caseValueCollected} />
      </Container>
      <DonateButton onPress={() => navigation.navigate('Details')}>
        <TextButton>DOAR</TextButton>
      </DonateButton>
    </Card>
  );
};

export default CaseItem;
