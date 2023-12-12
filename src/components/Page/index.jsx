import React from "react";
import { PageWrapper, PageInner } from "./styled";

const Page = ({children}) =>{
    return (
        <PageWrapper>
            <PageInner>
                {children}
            </PageInner>
        </PageWrapper>
    )
}

export default Page;