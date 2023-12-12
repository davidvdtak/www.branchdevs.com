import React from "react";
import { HeaderWrapper, TitleWrapper, SubHeaderWrapper, TitleInner, SubHeaderInner } from "./styled";
import theme from "../../theme";


const Header = ({children, title}) =>{

  return (
    <HeaderWrapper theme={theme}>
      <TitleWrapper theme={theme}>
         <TitleInner>
          <h1 style={{fontSize: '22px', color : theme.colors.base_800}}>{title}</h1>            
        </TitleInner>
      </TitleWrapper>
      {children && 
        <SubHeaderWrapper theme={theme}>
          <SubHeaderInner>
            {children}
          </SubHeaderInner>
        </SubHeaderWrapper>
      }
    </HeaderWrapper>
  )
}

export default Header;