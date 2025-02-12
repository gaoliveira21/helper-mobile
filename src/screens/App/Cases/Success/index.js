import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import {
  Container,
  Title,
  Congratulations,
  Description,
  ContentButton,
  ImageWinner,
  TextButton,
} from './styles';

import WinnerImg from '../../../../assets/winner.png';

const Success = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Title>Doação realizada com sucesso!</Title>
      <ImageWinner source={WinnerImg} />
      <Congratulations>Parabéns</Congratulations>
      <Description>Você acaba de tornar o dia de alguém mais feliz</Description>
      <TouchableOpacity onPress={() => navigation.navigate('Cases')}>
        <ContentButton>
          <TextButton>Continuar doando</TextButton>
          <MaterialIcons name="keyboard-arrow-right" size={36} color="#FFF" />
        </ContentButton>
      </TouchableOpacity>
    </Container>
  );
};

export default Success;
