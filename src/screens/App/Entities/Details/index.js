import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { TouchableOpacity, ScrollView, View, FlatList } from 'react-native';

import api from '../../../../services/api';
import { formatDate } from '../../../../utils/format';

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
} from './styles';

import Progress from '../../../../components/Progress';

import Mestre from '../../../../assets/mestre.png';

const Details = () => {
  const [entity, setEntity] = useState({});
  const { params } = useRoute();

  useEffect(() => {
    async function loadEntity() {
      const response = await api.get(`/entities/${params.id}`);

      setEntity(response.data);
    }

    loadEntity();
  }, [params]);

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
          <Description>{entity.profile?.description}</Description>
        </ContentBox>

        <ContentBox>
          <Title>Localização</Title>
          <DividerTitle />
          <Description>
            {entity.profile?.street}, {entity.profile?.number}
          </Description>
          <Description>
            {entity.profile?.neighborhood}, {entity.profile?.city} -{' '}
            {entity.profile?.state}
          </Description>
        </ContentBox>

        <ContentBox>
          <Title>Whatsapp</Title>
          <DividerTitle />
          <Description>{entity.profile?.whatsapp}</Description>
        </ContentBox>

        <ContentBox>
          <RowContent>
            <View>
              <Title>Casos abertos</Title>
              <DividerTitle />
            </View>
            <CountCases>
              <TextWhite>{entity.cases?.length}</TextWhite>
            </CountCases>
          </RowContent>

          <FlatList
            data={entity.cases}
            keyExtractor={(caseItem) => String(caseItem.id)}
            horizontal
            renderItem={({ item }) => {
              return (
                <TouchableOpacity>
                  <Case>
                    <CaseDate>{formatDate(item.createdAt)}</CaseDate>
                    <CaseTitle>{item.title}</CaseTitle>
                    <CaseEntity>{entity.name}</CaseEntity>
                    <CaseDescription>{item.description}</CaseDescription>
                    <Progress
                      value={item.value}
                      valueCollected={item.value_collected}
                    />
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
