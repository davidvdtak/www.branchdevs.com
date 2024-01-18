import React from 'react';
import { ErrorWrap } from "./styled";
import theme from "../../../theme";

const ServerErrorPage = () => {

  return (
    <ErrorWrap theme={theme}>
      <div>
        <h1>500 - Internal Error</h1>
        <p>Oops! something seams to be broken here</p>
      </div>
    </ErrorWrap>
  );
};

export default ServerErrorPage;
