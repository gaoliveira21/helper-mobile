import styled from 'styled-components/native';
import { Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  padding: 24px 24px;
  flex: 1;
`;

export const ContentBox = styled.View`
  margin: 12px 0;
`;

export const TitleCase = styled.Text`
  font-size: 24px;
  color: #263238;
  font-weight: bold;
`;
export const Title = styled.Text`
  font-size: 18px;
  color: #263238;
  font-weight: bold;
`;

export const EntityName = styled.Text`
  color: #999999;
  font-weight: bold;
`;

export const DonateButton = styled(RectButton)`
  width: 100%;
  padding: 24px 0;
  background-color: #6fcf97;

  border-radius: 8px;
  justify-content: center;
  align-items: center;

  margin-bottom: 8px;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const ImageContent = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 220px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
`;

export const CaseImage = styled(Image)`
  position: absolute;
  width: 400px;
`;

export const CountImages = styled.Text`
  color: #999999;
  align-self: flex-end;
`;

export const DividerTitle = styled.View`
  height: 4px;
  width: 40px;
  border-radius: 8px;
  background-color: #ff6b6c;
  margin-top: 4px;
`;

export const Description = styled.Text`
  color: #999999;
  line-height: 24px;

  margin-top: 8px;
`;
