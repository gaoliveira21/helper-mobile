import React, { useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { Alert, ScrollView } from 'react-native';
import { MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import * as Yup from 'yup';

import { TouchableOpacity } from 'react-native-gesture-handler';
import Header from '../../../components/Header';
import Avatar from '../../../components/AvatarInput';
import Input from '../../../components/Input';

import { useAuth } from '../../../hooks/auth';

import {
  FormBlock,
  Button,
  TextButton,
  Divider,
  SignOut,
  SignOutText,
} from './styles';
import errors from '../../../utils/errors';

const Profile = () => {
  const formRef = useRef();
  const navigation = useNavigation();
  const auth = useAuth();

  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        full_name: Yup.string().required('O campo Nome completo é obrigatório'),
        email: Yup.string()
          .email('O campo email precisa ser um email válido')
          .required('O campo email é obrigatório'),
        phone: Yup.string()
          .required('O campo Telefone é obrigatório')
          .matches(/^\d{11}$/g, 'Telefone informado é inválido'),
        city: Yup.string().required('O campo Cidade é obrigatório'),
        state: Yup.string()
          .length(2, 'O campo estado precisa ter 2 caracteres')
          .required('O campo estado é obrigatório'),
      });

      await schema.validate(data, { abortEarly: false });

      await auth.updateProfile(data);

      Alert.alert('Perfil alterado com sucesso!');
    } catch (err) {
      errors(err, formRef);
    }
  }

  return (
    <>
      <Header
        title="Perfil"
        description="Atualize as informações do seu perfil aqui!"
      />

      <ScrollView>
        <Form
          ref={formRef}
          onSubmit={handleSubmit}
          initialData={{ ...auth.user }}
        >
          <FormBlock>
            <Avatar image="" />
            <Input
              label="Nome completo"
              placeholder="Nome completo do usuário"
              icon={({ color }) => (
                <MaterialIcons name="person" size={24} color={color} />
              )}
              name="full_name"
            />
            <Input
              label="E-mail"
              placeholder="mail@mail.com"
              icon={({ color }) => (
                <MaterialIcons name="email" size={24} color={color} />
              )}
              name="email"
            />
            <Input
              label="Telefone"
              placeholder="(XX) XXXXX-XXXX"
              icon={({ color }) => (
                <MaterialIcons name="phone" size={24} color={color} />
              )}
              name="phone"
            />
            <Input
              label="Cidade"
              placeholder="Insira sua cidade"
              icon={({ color }) => (
                <MaterialIcons name="location-city" size={24} color={color} />
              )}
              name="city"
            />
            <Input
              label="Estado - UF"
              placeholder="Insira ser estado em formato UF"
              icon={({ color }) => (
                <MaterialIcons name="my-location" size={24} color={color} />
              )}
              name="state"
            />
            <Button
              color="#6FCF97"
              onPress={() => formRef.current.submitForm()}
            >
              <MaterialIcons name="person" color="#FFF" size={24} />
              <TextButton>Atualizar Perfil</TextButton>
            </Button>

            <Divider />

            <Button
              color="#FF6B6C"
              onPress={() => navigation.navigate('ChangePassword')}
            >
              <MaterialIcons name="lock" color="#FFF" size={24} />
              <TextButton>Alterar Senha</TextButton>
            </Button>

            <Button
              color="#5B5F97"
              onPress={() => navigation.navigate('CreditCard')}
            >
              <MaterialIcons name="credit-card" color="#FFF" size={24} />
              <TextButton>Gerenciar Cartões</TextButton>
            </Button>
            <TouchableOpacity onPress={auth.signOut}>
              <SignOut>
                <SignOutText>Sair do Helper</SignOutText>
                <SimpleLineIcons name="logout" size={24} color="#FF6B6C" />
              </SignOut>
            </TouchableOpacity>
          </FormBlock>
        </Form>
      </ScrollView>
    </>
  );
};

export default Profile;
