import styled from 'styled-components/native';
import { Image } from 'react-native';

export const Header = styled.View`
  background-color: #ff6b6c;
  min-height: 180px;
  width: 100%;
  padding: 24px 12px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImageContent = styled.View`
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  border-radius: 180px;
  overflow: hidden;
  position: relative;
  border: 2px solid #fff;
  background-color: #ff6b6c;

  margin: 24px 0 12px;
`;

export const ProfileImage = styled(Image)`
  position: absolute;
  width: 100%;
  height: 100%;
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
  background-color: #fff;
  border-radius: 12px;
`;

export const SmallText = styled.Text`
  font-size: 14px;
  color: #fff;
`;

export const MediumText = styled.Text`
  font-size: 24px;
  font-weight: 700;
  color: #fff;
`;

export const Total = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: #ff6b6c;
`;

export const Value = styled.Text`
  font-size: 36px;
  font-weight: 700;
  color: #ff6b6c;
`;
