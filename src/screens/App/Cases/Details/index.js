import React from 'react';
import { ScrollView } from 'react-native';

import Progress from '../../../../components/Progress';

import {
  Container,
  ContentBox,
  ImageContent,
  CaseImage,
  DonateButton,
  TextButton,
  TitleCase,
  Title,
  EntityName,
  DividerTitle,
  CountImages,
  Description,
} from './styles';

import Negoney from '../../../../assets/negoney.jpg';

const Details = () => {
  return (
    <ScrollView>
      <Container>
        <ContentBox>
          <TitleCase>Título do caso</TitleCase>
          <EntityName>Por: Nome da instituição</EntityName>
        </ContentBox>

        <ContentBox>
          <DonateButton>
            <TextButton>DOAR</TextButton>
          </DonateButton>
          <ImageContent>
            <CaseImage source={Negoney} />
          </ImageContent>
          <CountImages>Qtnd. Imagens</CountImages>
        </ContentBox>

        <ContentBox>
          <Title>Descrição</Title>
          <DividerTitle />
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            volutpat laoreet blandit. Maecenas vitae rutrum lectus.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </Description>
        </ContentBox>

        <ContentBox>
          <Title>Valor arrecadado</Title>
          <DividerTitle />
          <Progress value={300} valueCollected={110} />
        </ContentBox>
      </Container>
    </ScrollView>
  );
};

export default Details;
