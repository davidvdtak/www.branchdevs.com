import styled from "styled-components";

export const PageWrapper = styled.div`
  background: linear-gradient(180deg, ${(props) => props.theme.colors.base_100} 0%, ${(props) => props.theme.colors.base_100} 100%);
  width: 100%;
  min-height: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;