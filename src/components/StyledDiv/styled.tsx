import styled from "styled-components";

interface Props {
  $styles?: {[key: string] : any};
}

export const Div = styled.div<Props>`   
  ${(props) => props.$styles}
`;