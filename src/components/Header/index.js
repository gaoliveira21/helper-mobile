import React from 'react';
import { View } from 'react-native';

import { HeaderContent, SmallText, LargeText } from './styles';

const Header = ({ title, description }) => {
  return (
    <HeaderContent>
      <LargeText>{title}</LargeText>
      <SmallText>{description}</SmallText>
    </HeaderContent>
  );
};

export default Header;
