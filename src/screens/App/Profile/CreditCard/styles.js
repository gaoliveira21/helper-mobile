import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 48px 24px;
  flex: 1;
  background: #f9f9f9;
`;

export const Title = styled.Text`
  color: #263238;
  font-size: 24px;
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

  margin-top: 24px;
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
  padding: 18px 24px;
  border: 2px dashed #263238;
  border-radius: 8px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  margin-top: 24px;
`;

export const TextButton = styled.Text`
  margin-left: 18px;
  color: #263238;
  font-size: 16px;
  font-weight: bold;
`;
