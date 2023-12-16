import React from "react";
import theme from "../theme";
import BasicButton from "../components/BasicButton";
import { useNavigate, useLocation } from "react-router-dom";

const NavLayout = () =>{

  const navigate = useNavigate();
  const pathname = useLocation().pathname

  return (  
    <div className="d-flex flex-wrap gap-4 p-3 justify-content-center align-items-center">
      <BasicButton active={pathname === '/'} onClick={() => (navigate('/'))} color={theme.colors.primary} borderColor={theme.colors.primary}>Home</BasicButton>          
      <BasicButton active={pathname.startsWith('/about')} onClick={() => (navigate('/about'))} color={theme.colors.primary} borderColor={theme.colors.primary}>About</BasicButton>
      <BasicButton active={pathname.startsWith('/portfolio')} onClick={() => (navigate('/portfolio'))} color={theme.colors.primary} borderColor={theme.colors.primary}>Portfolio</BasicButton>
      <BasicButton active={pathname.startsWith('/resume')} onClick={() => (navigate('/resume'))} color={theme.colors.primary} borderColor={theme.colors.primary}>Resume</BasicButton>          
    </div>
  )
}
export default NavLayout;