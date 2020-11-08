import React, { useRef } from 'react';
import { ScrollView } from 'react-native';
import { Form } from '@unform/mobile';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import * as Yup from 'yup';

import { useAuth } from '../../../../../hooks/auth';

import Input from '../../../../../components/Input';
import Avatar from '../../../../../components/AvatarInput';

import {
  Container,
  FormBlock,
  ConfirmationButton,
  ConfirmationButtonText,
} from './styles';
import errors from '../../../../../utils/errors';

const Confirmation = () => {
  const formRef = useRef(null);
  const navigation = useNavigation();
  const route = useRoute();
  const auth = useAuth();

  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});
      const schema = Yup.object().shape({
        full_name: Yup.string().required('O campo Nome completo é obrigatório'),
        email: Yup.string()
          .email('O campo email precisa ser um email válido')
          .required('O campo email é obrigatório'),

        password: Yup.string()
          .min(6, 'O campo senha precisa ter ao menos 6 caracteres')
          .required('O campo senha é obrigatório'),
        phone: Yup.string()
          .required('O campo Telefone é obrigatório')
          .matches(/^\d{11}$/g, 'Telefone informado é inválido'),
        city: Yup.string().required('O campo Cidade é obrigatório'),
        state: Yup.string()
          .length(2, 'O campo estado precisa ter 2 caracteres')
          .required('O campo estado é obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await auth.signUp(data);

      navigation.navigate('SignUpSuccess');
    } catch (err) {
      errors(err, formRef);
    }
  }

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Form
          ref={formRef}
          onSubmit={handleSubmit}
          initialData={{ ...route.params }}
        >
          <FormBlock>
            <Avatar image="" />
            <Input
              label="Nome completo"
              placeholder="Insira seu nome completo"
              icon={({ color }) => (
                <MaterialIcons name="person" size={24} color={color} />
              )}
              name="full_name"
            />

            <Input
              label="Email"
              placeholder="example@mail.com"
              icon={({ color }) => (
                <MaterialIcons name="email" size={24} color={color} />
              )}
              name="email"
              autoCapitalize="none"
              autoCorrect={false}
            />

            <Input
              label="Senha"
              placeholder="***********"
              placeholderTextColor="#999999"
              icon={({ color }) => (
                <MaterialIcons name="remove-red-eye" size={24} color={color} />
              )}
              name="password"
              secureTextEntry
            />

            <Input
              label="Telefone"
              placeholder="(XX) XXXXX-XXXX"
              placeholderTextColor="#999999"
              icon={({ color }) => (
                <MaterialIcons name="local-phone" size={24} color={color} />
              )}
              name="phone"
            />

            <Input
              label="Cidade"
              placeholder="Insira sua cidade"
              placeholderTextColor="#999999"
              icon={({ color }) => (
                <MaterialIcons name="location-city" size={24} color={color} />
              )}
              name="city"
            />

            <Input
              label="Estado (UF)"
              placeholder="Insira seu estado"
              placeholderTextColor="#999999"
              icon={({ color }) => (
                <MaterialIcons name="my-location" size={24} color={color} />
              )}
              name="state"
              maxLength={2}
            />

            <ConfirmationButton onPress={() => formRef.current.submitForm()}>
              <ConfirmationButtonText>
                Confirmar cadastro
              </ConfirmationButtonText>
            </ConfirmationButton>
          </FormBlock>
        </Form>
      </ScrollView>
    </Container>
  );
};

export default Confirmation;
