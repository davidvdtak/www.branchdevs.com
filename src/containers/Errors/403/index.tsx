import React from 'react';
import { ErrorWrap } from "./styled";
import theme from "../../../theme";
import Page from 'src/components/Page';


const ForbiddenPage = () => {
  
  return (
    <Page>
      <ErrorWrap theme={theme}>
        <div>
          <h1>403 - Forbidden</h1>
          <p>You don't have permission to access this page.</p>
        </div>
      </ErrorWrap>
    </Page>
  );
};

export default ForbiddenPage;
