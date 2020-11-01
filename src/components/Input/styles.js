import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.Text`
  color: #263238;
  font-size: 16px;
`;

export const InputBlock = styled.View`
  background: #DFE4EA;
  flex-direction: row;
  align-items: center;
  padding: 15px 10px;
  border-radius: 16px;
  margin: 5px 0;
  border: 1px solid ${props => props.focused ? '#5B5F97' : 'transparent'};
`;

export const Field = styled.TextInput`
  width: 90%;
`;

export const Error = styled.Text`
  color: #FF6B6C;
  font-size: 14px;
  height: 24px;
`;