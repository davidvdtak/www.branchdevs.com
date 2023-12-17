import styled from "styled-components";

export const BaseWrapper = styled.div`
  background: ${(props) => props.theme.colors.base_300};
  width: 100%;
  min-height: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;


export const NavWrapper = styled.div`
  background: ${(props) => props.theme.colors.base_300};  
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: .75rem;
  padding: .75rem;
  align-items: center;
  justify-content: center;  
`;