import React, { useState, useEffect } from 'react';
import { FlatList, ScrollView } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import api from '../../../../services/api';
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

const Details = () => {
  const navigation = useNavigation();
  const [caseData, setCaseData] = useState({});
  const { id } = useRoute().params;

  useEffect(() => {
    async function loadCases() {
      const response = await api.get(`/cases/${id}`);

      setCaseData(response.data);
    }

    loadCases();
  }, [id]);

  return (
    <ScrollView>
      <Container>
        <ContentBox>
          <TitleCase>{caseData.title}</TitleCase>
          <EntityName>Por: {caseData?.owner?.name}</EntityName>
        </ContentBox>

        <ContentBox>
          <DonateButton
            onPress={() => navigation.navigate('Payment', { id: caseData?.id })}
          >
            <TextButton>DOAR</TextButton>
          </DonateButton>
          <FlatList
            horizontal
            data={caseData.files}
            keyExtractor={(file) => String(file.id)}
            renderItem={({ item }) => {
              return (
                <ImageContent>
                  <CaseImage
                    source={{
                      uri: item.url.replace('localhost', '192.168.20.106'),
                    }}
                  />
                </ImageContent>
              );
            }}
          />

          <CountImages>
            Qtnd. Imagens: {caseData.files?.length || 0}
          </CountImages>
        </ContentBox>

        <ContentBox>
          <Title>Descrição</Title>
          <DividerTitle />
          <Description>{caseData.description}</Description>
        </ContentBox>

        <ContentBox>
          <Title>Valor arrecadado</Title>
          <DividerTitle />
          <Progress
            value={caseData.value || 0}
            valueCollected={caseData.value_collected || 0}
          />
        </ContentBox>
      </Container>
    </ScrollView>
  );
};

export default Details;
