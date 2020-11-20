import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';

import { formatDate } from '../../utils/format';

import {
  Card,
  Container,
  ImageContent,
  CaseImage,
  Date,
  Title,
  Entity,
  Description,
  DonateButton,
  TextButton,
} from './styles';

import Progress from '../Progress';

const CaseItem = ({
  id,
  caseDate,
  title,
  entity,
  description,
  caseValue,
  caseValueCollected,
  imageCase,
}) => {
  const navigation = useNavigation();
  const formattedDate = useMemo(() => formatDate(caseDate), [caseDate]);

  return (
    <Card>
      {imageCase ? (
        <ImageContent>
          <CaseImage source={{ uri: imageCase }} />
        </ImageContent>
      ) : null}
      <Container>
        <Date>{formattedDate}</Date>
        <Title>{title}</Title>
        <Entity>Por: {entity}</Entity>
        <Description>{description}</Description>
        <Progress value={caseValue} valueCollected={caseValueCollected} />
      </Container>

      <DonateButton onPress={() => navigation.navigate('Details', { id })}>
        <TextButton>DOAR</TextButton>
      </DonateButton>
    </Card>
  );
};

CaseItem.propTypes = {
  id: PropTypes.number.isRequired,
  caseDate: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  entity: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  caseValue: PropTypes.number.isRequired,
  caseValueCollected: PropTypes.number.isRequired,
  imageCase: PropTypes.string.isRequired,
};

export default CaseItem;
