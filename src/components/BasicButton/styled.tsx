import styled from "styled-components";

interface Props {
  $customStyles?: {[key: string] : any};
  $submitting?: boolean;
}

export const ButtonWrap = styled.div<Props>`  
  button {
    position: relative;
    font-size:${(props) => props?.$customStyles?.fontSize ? props?.$customStyles?.fontSize+'!important' : ''};
    margin:${(props) => props?.$customStyles?.margin ? props?.$customStyles?.margin+'!important' : ''};
    border-radius: ${(props) => props?.$customStyles?.borderRadius || "4px"};
    background-color: ${(props) => props?.$customStyles?.bgColor};
    border-color: ${(props) => props?.$customStyles?.borderColor};
    color: ${(props) => props?.$customStyles?.color};
    text-align: center;
    padding-left: ${(props) => props?.$customStyles?.paddingX || "2rem"}!important;
    padding-right: ${(props) => props?.$customStyles?.paddingX || "2rem"}!important;
    min-width: ${(props) => props?.$customStyles?.width};   
    max-width: 100%; 
    min-height: ${(props) => props?.$customStyles?.height};   
    display:flex;
    justify-content:center;
    align-items:center;
    font-weight:500;
    opacity:${(props) => props.$submitting ? '0.8' : '1'};
    &:hover{
      background-color: ${(props) => props?.$customStyles?.bgColor};
      border-color: ${(props) => props?.$customStyles?.borderColor};
      opacity:0.8;
      color: ${(props) => props?.$customStyles?.color};
    }
    &:active{
      background-color: ${(props) => props?.$customStyles?.bgColor} !important;
      border-color: ${(props) => props?.$customStyles?.borderColor} !important;
      opacity:0.8;
    }
    &:disabled{
      color: transparent!important;
      background-color: ${(props) => props?.$customStyles?.bgColor} !important;
      border-color: ${(props) => props?.$customStyles?.borderColor} !important;
    }
  }
`;