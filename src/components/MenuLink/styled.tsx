import styled from "styled-components";


interface Props {
  $active?: boolean;
  theme?: {[key: string] : any};
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
    background: ${(props) => props?.$active ? props.theme.colors.base_100 : 'transparent'};
    &:hover{
      background:${props => props.theme.colors.base_100};
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