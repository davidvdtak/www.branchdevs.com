import React, { forwardRef } from "react";
import { BaseInner, BaseWrapper, NavBar } from "./styled";
import { Outlet, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import theme from "../theme";
import { useConfig } from "../context/Config";
import NavLayout from "./NavLayout";
import BasicButton from "src/components/BasicButton";

const BaseLayout = forwardRef<HTMLDivElement>(({ children }, ref) => {

  const config = useConfig(); 
  const navigate = useNavigate();

  return (    
    <>
      <Helmet>
        <link rel="icon" type="image/png" sizes="192x192"  href={`${config.app.PUBLIC_URL}/images/android-icon-192x192.png`} />        
        <link rel="apple-touch-icon" sizes="180x180" href={`${config.app.PUBLIC_URL}/images/apple-icon.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${config.app.PUBLIC_URL}/images/favicon-32x32.png`} />    
        <link rel="icon" type="image/png" sizes="16x16" href={`${config.app.PUBLIC_URL}/images/favicon-16x16.png`} />
      </Helmet>
      <BaseWrapper  
          ref={ref}                   
          theme={theme}
        >
          <NavLayout />
          <NavBar>  
            <div className="container">
              <div className="d-flex flex-grow flex-row gap-3 flex-wrap justify-content-end align-items-center p-2">                
                <BasicButton onClick={() => (navigate('/'))} color={theme.colors.primary} borderColor={"transparent"}>Home</BasicButton>
                <BasicButton onClick={() => (navigate('/portfolio'))} color={theme.colors.primary} borderColor={"transparent"}>Portfolio</BasicButton>
                <BasicButton onClick={() => (navigate('/resume'))} color={theme.colors.primary} borderColor={"transparent"}>Resume</BasicButton>
              </div>
            </div>
          </NavBar>
          <BaseInner>          
            <Outlet/>        
          </BaseInner>
      </BaseWrapper>
    </>
  )
});

export default BaseLayout;