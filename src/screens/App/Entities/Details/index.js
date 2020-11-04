import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, ScrollView, View, FlatList } from 'react-native';
import { BaseButton, BorderlessButton } from 'react-native-gesture-handler';

import { MaterialIcons } from '@expo/vector-icons';

import {
  Container,
  ContentBox,
  ImageContent,
  ProfileImage,
  Title,
  Description,
  DividerTitle,
  RowContent,
  CountCases,
  TextWhite,
  Case,
  CaseDate,
  CaseTitle,
  CaseEntity,
  CaseDescription,
  ConfirmButton,
  TextButton,
} from './styles';

import Progress from '../../../../components/Progress';

import Mestre from '../../../../assets/mestre.png';

const Details = () => {
  const slideList = [1, 2, 3];

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container>
        <ContentBox>
          <ImageContent>
            <ProfileImage source={Mestre} />
          </ImageContent>
        </ContentBox>

        <ContentBox>
          <Title>Descrição</Title>
          <DividerTitle />
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            volutpat laoreet blandit. Maecenas vitae rutrum lectus.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Aliquam volutpat
            laoreet blandit. Maecenas vitae rutrum lectus.
          </Description>
        </ContentBox>

        <ContentBox>
          <Title>Localização</Title>
          <DividerTitle />
          <Description>Rua Victorio Osti, 180</Description>
          <Description>Vila Correa, Barra Bonita - SP</Description>
        </ContentBox>

        <ContentBox>
          <Title>Whatsapp</Title>
          <DividerTitle />
          <Description>14 998765432</Description>
        </ContentBox>

        <ContentBox>
          <RowContent>
            <View>
              <Title>Casos abertos</Title>
              <DividerTitle />
            </View>
            <CountCases>
              <TextWhite>{slideList.length}</TextWhite>
            </CountCases>
          </RowContent>

          <FlatList
            data={slideList}
            horizontal
            renderItem={() => {
              return (
                <TouchableOpacity>
                  <Case>
                    <CaseDate>04/11/2020</CaseDate>
                    <CaseTitle>Título do caso</CaseTitle>
                    <CaseEntity>Por nome da entidade</CaseEntity>
                    <CaseDescription>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam volutpat laoreet blandit. Maecenas vitae rutrum
                      lectus.
                    </CaseDescription>
                    <Progress value={400} valueCollected={120} />
                  </Case>
                </TouchableOpacity>
              );
            }}
          />
        </ContentBox>
      </Container>
    </ScrollView>
  );
};

export default Details;
