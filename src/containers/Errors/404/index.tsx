import React from 'react';
import { ErrorWrap } from "./styled";
import theme from "../../../theme";
import Page from 'src/components/Page';

const NotFoundPage = () => {

  return (
    <Page> 
      <ErrorWrap theme={theme}>
        <div>
          <h1>404 - Not Found</h1>
          <p>Oops! The page you're looking for does not exist.</p>
        </div>
      </ErrorWrap>
    </Page>
  );
};

export default NotFoundPage;
