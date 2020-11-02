import React from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import Input from '../../../../../components/Input';
import Avatar from '../../../../../components/AvatarInput';

import {
  Container,
  Form,
  ConfirmationButton,
  ConfirmationButtonText,
} from './styles';

const Confirmation = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Form>
          <Avatar image="" />
          <Input
            label="Nome completo"
            placeholder="Insira seu nome completo"
            icon={({ color }) => (
              <MaterialIcons name="person" size={24} color={color} />
            )}
            error=""
          />

          <Input
            label="Email"
            placeholder="example@mail.com"
            icon={({ color }) => (
              <MaterialIcons name="email" size={24} color={color} />
            )}
            error=""
          />

          <Input
            label="Senha"
            placeholder="***********"
            placeholderTextColor="#999999"
            icon={({ color }) => (
              <MaterialIcons name="remove-red-eye" size={24} color={color} />
            )}
            error=""
          />

          <Input
            label="Telefone"
            placeholder="(XX) XXXXX-XXXX"
            placeholderTextColor="#999999"
            icon={({ color }) => (
              <MaterialIcons name="local-phone" size={24} color={color} />
            )}
            error=""
          />

          <Input
            label="Cidade"
            placeholder="Insira sua cidade"
            placeholderTextColor="#999999"
            icon={({ color }) => (
              <MaterialIcons name="location-city" size={24} color={color} />
            )}
            error=""
          />

          <Input
            label="Estado (UF)"
            placeholder="Insira seu estado"
            placeholderTextColor="#999999"
            icon={({ color }) => (
              <MaterialIcons name="my-location" size={24} color={color} />
            )}
            error=""
          />

          <ConfirmationButton
            onPress={() => navigation.navigate('SignUpSuccess')}
          >
            <ConfirmationButtonText>Confirmar cadastro</ConfirmationButtonText>
          </ConfirmationButton>
        </Form>
      </ScrollView>
    </Container>
  );
};

export default Confirmation;
