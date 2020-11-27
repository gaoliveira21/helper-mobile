import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Image } from 'react-native';

export const Container = styled.View`
  background: #f9f9f9;
  padding: 48px 24px;
  flex: 1;
`;

export const ContentBox = styled.View`
  margin-bottom: 24px;
`;

export const ImageContent = styled.View`
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 180px;
  border-radius: 180px;
  overflow: hidden;
  position: relative;

  margin: 0 auto;
`;

export const ProfileImage = styled(Image)`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const Title = styled.Text`
  color: #263238;
  font-size: 18px;
  font-weight: bold;
`;

export const Description = styled.Text`
  color: #999999;
  line-height: 24px;

  margin-top: 8px;
`;

export const DividerTitle = styled.View`
  height: 4px;
  width: 80px;
  border-radius: 8px;
  background-color: #ff6b6c;
  margin-top: 8px;
`;

export const RowContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CountCases = styled.View`
  width: 36px;
  height: 36px;
  border-radius: 48px;
  background-color: #ff6b6c;
  align-items: center;
  justify-content: center;
`;

export const TextWhite = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const Case = styled.View`
  background-color: #fff;
  border-radius: 8px;
  padding: 24px;
  width: 320px;

  margin-top: 12px;
  margin-right: 12px;
`;

export const CaseDate = styled.Text`
  align-self: flex-end;
  color: #999999;
`;

export const CaseTitle = styled.Text`
  color: #263238;
  font-size: 24px;
  font-weight: 700;
`;

export const CaseEntity = styled.Text`
  color: #ff6b6c;
  font-weight: 700;
`;

export const CaseDescription = styled.Text`
  color: #999999;
  line-height: 24px;
  margin: 12px 0;
`;

export const WhatsappBtn = styled(RectButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  width: 100%;
  margin: 12px 0;
  padding: 12px 0;
  background-color: #6fcf97;

  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

// export const ConfirmButton = styled(RectButton)`
//   width: 100%;
//   padding: 24px 0;
//   background-color: #6fcf97;

//   border-radius: 8px;
//   justify-content: center;
//   align-items: center;
// `;

export const TextButton = styled.Text`
  margin-left: 12px;
  color: #fff;
  font-weight: bold;
`;
