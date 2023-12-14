import React, { ReactNode } from "react";
import { PageWrapper } from "./styled";


interface Props {
  children: ReactNode;
}

const Page: React.FC<Props> = ({ 
  children
}) => {
  return (
    <PageWrapper>        
      {children}      
    </PageWrapper>
  )
}

export default Page;