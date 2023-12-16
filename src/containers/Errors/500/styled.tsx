import styled from 'styled-components';

export const ErrorWrap = styled.div`
  background: ${(props) => props.theme.colors.base_100};
  color: #fff;
  flex-grow: 1;
  justify-content: center;
  align-items: center; 
  display: flex;
  flex-direction: column;
  text-align: start;     
`