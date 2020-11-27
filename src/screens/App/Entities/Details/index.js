import React, { useState, useEffect } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import {
  TouchableOpacity,
  ScrollView,
  View,
  FlatList,
  Linking,
} from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

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
  WhatsappBtn,
  TextButton,
} from './styles';

import Progress from '../../../../components/Progress';

const Details = () => {
  const [entity, setEntity] = useState({});
  const { params } = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    async function loadEntity() {
      const response = await api.get(`/entities/${params.id}`);

      setEntity(response.data);
    }

    loadEntity();
  }, [params]);

  function handleWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=55${entity.profile?.whatsapp}`);
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container>
        <ContentBox>
          {entity.profile?.avatar ? (
            <ImageContent>
              <ProfileImage source={{ uri: entity.profile.avatar?.url }} />
            </ImageContent>
          ) : null}
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
          <WhatsappBtn onPress={handleWhatsapp}>
            <FontAwesome name="whatsapp" size={24} color="#FFF" />
            <TextButton>{entity.profile?.whatsapp}</TextButton>
          </WhatsappBtn>
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
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('CaseDetails', { id: params.id })
                  }
                >
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
