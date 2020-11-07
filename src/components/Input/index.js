import React, { useState, useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import { Container, Label, InputBlock, Field, Error } from './styles';

const Input = ({ name, label, icon: Icon, ...rest }) => {
  const [focused, setFocused] = useState(false);
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    inputRef.current.value = defaultValue;
  }, [defaultValue]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      clearValue(ref) {
        ref.value = '';
        ref.clear();
      },
      setValue(ref, value) {
        ref.setNativeProps({ text: value });
        inputRef.current.value = value;
      },
      getValue(ref) {
        return ref.value;
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <Label>{label}</Label>
      <InputBlock focused={focused}>
        <Field
          ref={inputRef}
          defaultValue={defaultValue}
          placeholderTextColor={focused ? '#5B5F97' : '#999999'}
          keyboardAppearance="dark"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChangeText={(value) => {
            if (inputRef.current) {
              inputRef.current.value = value;
            }
          }}
          {...rest}
        />
        {Icon && <Icon color={focused ? '#5B5F97' : '#999999'} />}
      </InputBlock>
      <Error>{error}</Error>
    </Container>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Input;
