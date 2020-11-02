import React from 'react';
import PropTypes from 'prop-types';

import { HeaderContent, SmallText, LargeText } from './styles';

const Header = ({ title, description }) => {
  return (
    <HeaderContent>
      <LargeText>{title}</LargeText>
      <SmallText>{description}</SmallText>
    </HeaderContent>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Header;
