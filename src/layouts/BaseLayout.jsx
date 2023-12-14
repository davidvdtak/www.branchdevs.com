import React from "react";
import { PageWrapper } from "./styled";
import { Outlet } from "react-router-dom";
import {Helmet} from "react-helmet";
import theme from "../theme";
import { useConfig } from "../context/Config";

const BaseLayout = () =>{

  const config = useConfig(); 

  return (    
    <>
      <Helmet>
        <link rel="icon" type="image/png" sizes="192x192"  href={`${config.app.PUBLIC_URL}/images/android-icon-192x192.png`} />        
        <link rel="apple-touch-icon" sizes="180x180" href={`${config.app.PUBLIC_URL}/images/apple-icon.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${config.app.PUBLIC_URL}/images/favicon-32x32.png`} />    
        <link rel="icon" type="image/png" sizes="16x16" href={`${config.app.PUBLIC_URL}/images/favicon-16x16.png`} />
      </Helmet>
      <PageWrapper theme={theme}>
        <Outlet/>
        <div id="footer" className="py-3">
          <p className="m-0 text-center text-light"><small>© 2020 & Beyond. All Rights Reserved.</small></p>
        </div>
      </PageWrapper>
    </>
  )
}
export default BaseLayout;