import React from 'react';
import { ErrorWrap } from "./styled";
import theme from "../../../theme";
import Page from 'src/components/Page';

const ServerErrorPage = () => {

  return (
    <Page>
      <ErrorWrap theme={theme}>
        <div>
          <h1>500 - Internal Error</h1>
          <p>Oops! something seams to be broken here</p>
        </div>
      </ErrorWrap>
    </Page>
  );
};

export default ServerErrorPage;
