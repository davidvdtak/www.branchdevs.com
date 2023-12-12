import React from "react";
import { PageWrapper, PageInner } from "./styled";

const Page = ({children}) =>{
  return (
    <PageWrapper>        
      {children}      
    </PageWrapper>
  )
}

export default Page;