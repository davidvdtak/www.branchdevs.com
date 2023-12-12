import React from "react";
import { Div } from "./styled";

const StyledDiv = ({children, styles}) => {

  return (
    <Div $styles={styles}>
      {children}       
    </Div>
  );
};

export default StyledDiv;