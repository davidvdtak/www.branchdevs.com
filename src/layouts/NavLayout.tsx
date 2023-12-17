import React from "react";
import theme from "../theme";
import BasicButton from "../components/BasicButton";
import { useNavigate, useLocation } from "react-router-dom";
import { NavWrapper } from "./styled";

const NavLayout = () =>{

  const navigate = useNavigate();
  const pathname = useLocation().pathname

  return (  
    <NavWrapper theme={theme}>
      <BasicButton active={pathname === '/'} onClick={() => (navigate('/'))} color={theme.colors.primary} borderColor={theme.colors.primary}>Home</BasicButton>          
      <BasicButton active={pathname.startsWith('/about')} onClick={() => (navigate('/about'))} color={theme.colors.primary} borderColor={theme.colors.primary}>About</BasicButton>
      <BasicButton active={pathname.startsWith('/portfolio')} onClick={() => (navigate('/portfolio'))} color={theme.colors.primary} borderColor={theme.colors.primary}>Portfolio</BasicButton>
      <BasicButton active={pathname.startsWith('/resume')} onClick={() => (navigate('/resume'))} color={theme.colors.primary} borderColor={theme.colors.primary}>Resume</BasicButton>          
    </NavWrapper>
  )
}
export default NavLayout;