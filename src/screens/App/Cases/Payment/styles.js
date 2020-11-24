import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { CheckBox } from 'react-native';

export const Container = styled.View`
  padding: 48px 24px;
  flex: 1;
  background-color: #f9f9f9;
`;

export const ContentBox = styled.View`
  margin-top: 24px;
`;

export const Title = styled.Text`
  color: #263238;
  font-size: 18px;
  font-weight: bold;
`;

export const DividerTitle = styled.View`
  height: 4px;
  width: 80px;
  border-radius: 8px;
  background-color: #ff6b6c;
  margin-top: 8px;
`;

export const CreditCardBox = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 24px;
  background-color: #fff;
  border-radius: 8px;

  margin: 24px 0;
`;

export const TextContent = styled.View`
  margin-left: 18px;
`;

export const NameCard = styled.Text`
  color: #263238;
  font-size: 16px;
  font-weight: bold;
`;

export const NumberCard = styled.Text`
  color: #999999;
  font-size: 14px;
`;

export const RegisterCreditCard = styled.View`
  padding: 18px 4px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const AddCardButton = styled.Text`
  margin-left: 12px;
  color: #5b5f97;
  font-size: 16px;
  font-weight: bold;
  padding: 15px 0;
`;

export const CheckAnonymous = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  margin-bottom: 24px;
`;

export const Check = styled(CheckBox)`
  margin-right: 8px;
`;

export const CheckText = styled.Text`
  font-weight: bold;
  color: #263238;
`;

export const ConfirmButton = styled(RectButton)`
  width: 100%;
  padding: 24px 0;
  background-color: #6fcf97;

  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-weight: bold;
`;
