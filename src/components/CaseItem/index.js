import React from 'react';
import { View, Image, Text } from 'react-native';

import { Card, Container, ImageContent, CaseImage, Date, Title, Entity, Description, DonateBox, DonateButton, TextButton} from './styles';

import Progress from '../Progress';

import Negoney from '../../assets/negoney.jpg';

const CaseItem = ({ imageCase, caseDate, title, entity, description, caseValue, caseValueCollected }) => {
  return (
    <Card>
      <ImageContent>
        <CaseImage source={Negoney}></CaseImage>
      </ImageContent>
      <Container>
        <Date>{caseDate}</Date>
        <Title>{title}</Title>
        <Entity>{entity}</Entity>
        <Description>{description}</Description>
        <Progress value={caseValue} valueCollected={caseValueCollected} />
      </Container>
      <DonateButton><TextButton>DOAR</TextButton></DonateButton>
    </Card>
  );
}

export default CaseItem;