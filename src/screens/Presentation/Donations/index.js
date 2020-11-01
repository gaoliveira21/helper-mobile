import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { TouchableOpacity} from 'react-native'; 

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
  Step3 
} from './styles';

import DonationImg from '../../../assets/awesome.png';

const Donations = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <LogoText>Helper</LogoText>
      <Image source={DonationImg}/>
      <Title>Faça doações</Title>
      <Description>Aqui você encontra todas as instituições próximas a você.</Description>
      <RowButtons>
        <TouchableOpacity>
          <BackText onPress={() => navigation.navigate('Welcome')} >Voltar</BackText>
        </TouchableOpacity>
        <NextButton onPress={() => navigation.navigate('Community')}>
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
}

export default Donations;