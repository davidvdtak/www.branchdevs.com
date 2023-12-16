import React, { ReactNode } from "react";
import { PageWrapper, PageInner } from "./styled";
import theme from "../../theme";
import transition from "./transition";

interface Props {
  children: ReactNode;
}

const Page: React.FC<Props> = ({ 
  children
}) => {
  
  return (
    <PageWrapper    
      theme={theme}
    >
      <PageInner>        
        {children}      
      </PageInner>
    </PageWrapper>
  )
}

export default transition(Page);