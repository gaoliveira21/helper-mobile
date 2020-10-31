import styled from 'styled-components/native';

export const ProgressBar = styled.View`
  width: 100%;
  height: 36px;
  background-color: #DFE4EA;
  border: 8px;
`;

export const CurrentProgress = styled.View`
    justify-content: flex-end;
    align-items: center;
    // width: ${(props) => (props.percent < 30 ? '30%' : `${props.percent}%`)};
    width: 20%;
    height: 100%;
    padding: 0 12px;
    border-radius: 8px;
    background-color: #5B5F97;
`;
