import styled from "styled-components";


interface Props {
  $active?: boolean;
}

export const NavLinkWrapper = styled.div<Props>`  
  a {
    text-decoration:none!important;
    padding:10px;
    border-radius:5px;        
    cursor:pointer;
    display:flex;
    width: 100%;
    text-decoration: none;
    &:hover{
      span{ color: #fff; }
      svg{
        fill #fff!important;
        path{
          fill: #fff!important;
        }
      }
    }
  }
`;

export const LinkText = styled.span<Props>`
  font-size:16px;
  font-weight:500;
  color: #fff;
`;