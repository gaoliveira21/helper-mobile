import styled from 'styled-components/native';

export const Header = styled.View`
  background-color: #FF6B6C;
  min-height: 240px;
  width: 100%;
  padding: 0px 48px;
  justify-content: center;
  align-items: flex-start;
`;

export const ImageProfile = styled.Image`

`;

export const Container = styled.View`
  padding: 24px;
  flex: 1;
`;

export const TotalDonations = styled.View`
  width: 100%;
  min-height: 240px;
  padding: 48px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #FF6B6C;
  border-radius: 8px;
`;

export const SmallText = styled.Text`
  font-size: 14px;
  color: #FFF;
`;

export const MediumText = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: #FFF;
`;

export const LargeBoldText = styled.Text`
  font-size: 32px;
  font-weight: 700;
  color: #FFF;
`;