import React from 'react';

import { Container, Label, InputBlock, Field, Error } from './styles';

const Input = ({ label, icon: Icon, error, ...rest }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <InputBlock>
        <Field {...rest} />
        {Icon && (
          <Icon color="#999999" />
        )}
      </InputBlock>
      <Error>{error}</Error>
    </Container>
  );
}

export default Input;