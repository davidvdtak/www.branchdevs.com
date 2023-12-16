import styled from "styled-components";

export const PageWrapper = styled.div`
  background: ${(props) => props.theme.colors.base_300};
  width: 100%;
  min-height: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;