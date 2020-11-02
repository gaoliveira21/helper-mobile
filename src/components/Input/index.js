import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Container, Label, InputBlock, Field, Error } from './styles';

const Input = ({ label, icon: Icon, error, ...rest }) => {
  const [focused, setFocused] = useState(false);

  return (
    <Container>
      <Label>{label}</Label>
      <InputBlock focused={focused}>
        <Field
          {...rest}
          placeholderTextColor={focused ? '#5B5F97' : '#999999'}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        {Icon && <Icon color={focused ? '#5B5F97' : '#999999'} />}
      </InputBlock>
      <Error>{error}</Error>
    </Container>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  error: PropTypes.string.isRequired,
};

export default Input;
