import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { TouchableOpacity } from 'react-native';

import {
  Container,
  LogoText,
  Image,
  Title,
  Description,
  RowButtons,
  BackText,
  NextButton,
  TextButton,
  RowSteps,
  Step1,
  Step2,
  Step3,
} from './styles';

import CommunityImg from '../../../assets/team.png';

const Community = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <LogoText>Helper</LogoText>
      <Image source={CommunityImg} />
      <Title>Ajude sua comunidade!</Title>
      <Description>
        Para melhorar o mundo, vamos começar pela nossa região. Faça o seu
        cadastro e comece ajudar muitas pessoas.
      </Description>
      <RowButtons>
        <TouchableOpacity>
          <BackText onPress={() => navigation.navigate('Donations')}>
            Voltar
          </BackText>
        </TouchableOpacity>
        <NextButton onPress={() => navigation.navigate('')}>
          <TextButton>Próximo</TextButton>
        </NextButton>
      </RowButtons>
      <RowSteps>
        <Step1 />
        <Step2 />
        <Step3 />
      </RowSteps>
    </Container>
  );
};

export default Community;
