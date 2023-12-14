import styled from 'styled-components';

interface Props {
  $customStyles?: {[key: string] : any};
  $pathStyles?: {[key: string] : any};
}

export const SVGWrapper = styled.button<Props>` 
  cursor: auto!important;;
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  ${(props) => props.$customStyles}
  & path {
    ${(props) => props.$pathStyles}
  }
`