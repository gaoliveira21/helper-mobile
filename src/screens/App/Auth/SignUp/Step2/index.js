import React, { useRef } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { MaterialIcons } from '@expo/vector-icons';
import * as Yup from 'yup';

import Input from '../../../../../components/Input';
import Avatar from '../../../../../components/AvatarInput';

import { Container, FormBlock, NextButton, NextButtonText } from './styles';
import errors from '../../../../../utils/errors';

const Step2 = () => {
  const formRef = useRef(null);
  const navigation = useNavigation();
  const route = useRoute();

  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});
      const schema = Yup.object().shape({
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

      const { full_name, email, password } = route.params;
      const { city, state, phone } = data;
      navigation.navigate('SignUpConfirmation', {
        full_name,
        email,
        password,
        city,
        state,
        phone,
      });
    } catch (err) {
      errors(err, formRef);
    }
  }

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <FormBlock>
          <Avatar image="" />
          <Input
            label="Telefone"
            placeholder="(XX) XXXXX-XXXX"
            icon={({ color }) => (
              <MaterialIcons name="local-phone" size={24} color={color} />
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
            label="Estado (UF)"
            placeholder="Insira seu estado"
            placeholderTextColor="#999999"
            icon={({ color }) => (
              <MaterialIcons name="my-location" size={24} color={color} />
            )}
            name="state"
            maxLength={2}
          />

          <NextButton onPress={() => formRef.current.submitForm()}>
            <NextButtonText>Próximo</NextButtonText>
          </NextButton>
        </FormBlock>
      </Form>
    </Container>
  );
};

export default Step2;
