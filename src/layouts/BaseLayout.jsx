import React, { useContext, useEffect } from "react";
import { PageWrapper, PageContent } from "./styled";
import { Outlet } from "react-router-dom";
import theme from "../theme";

const BaseLayout = () =>{

  return (        
    <PageWrapper theme={theme}>
      <PageContent>
        <Outlet/>
      </PageContent>
    </PageWrapper>
  )
}
export default BaseLayout;