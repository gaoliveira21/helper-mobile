import styled from 'styled-components/native';

export const Header = styled.View`
  background-color: #ff6b6c;
  min-height: 180px;
  width: 100%;
  padding: 0 48px 48px;
  justify-content: flex-end;
  align-items: flex-start;
`;

export const ImageProfile = styled.Image``;

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
  background-color: #ff6b6c;
  border-radius: 8px;
`;

export const SmallText = styled.Text`
  font-size: 14px;
  color: #fff;
`;

export const MediumText = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: #fff;
`;

export const LargeBoldText = styled.Text`
  font-size: 32px;
  font-weight: 700;
  color: #fff;
`;
