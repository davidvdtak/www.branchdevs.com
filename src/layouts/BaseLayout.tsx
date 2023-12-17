import React, { forwardRef } from "react";
import { BaseWrapper } from "./styled";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
import theme from "../theme";
import { useConfig } from "../context/Config";
import NavLayout from "./NavLayout";

const BaseLayout = forwardRef<HTMLDivElement>(({ children }, ref) => {

  const config = useConfig(); 

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
          <div className="position-relative flex-grow-1 d-flex flex-column overflow-hidden">
            <Outlet/>        
          </div>
      </BaseWrapper>
    </>
  )
});

export default BaseLayout;