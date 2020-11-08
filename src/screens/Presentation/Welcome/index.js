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
  JumpText,
  NextButton,
  TextButton,
  RowSteps,
  Step1,
  Step2,
  Step3,
} from './styles';

import WelcomeImg from '../../../assets/welcome.png';
import { useApp } from '../../../hooks/app';

const Welcome = () => {
  const { presentationDone } = useApp();
  const navigation = useNavigation();

  return (
    <Container>
      <LogoText>Helper</LogoText>
      <Image source={WelcomeImg} />
      <Title>Seja bem-vindo ao Helper</Title>
      <Description>Sua plataforma de doações online.</Description>
      <RowButtons>
        <TouchableOpacity onPress={() => presentationDone()}>
          <JumpText>Pular</JumpText>
        </TouchableOpacity>
        <NextButton onPress={() => navigation.navigate('Donations')}>
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

export default Welcome;
