import React, { ReactNode } from "react";
import { Div } from "./styled";


interface Props {
  children?: ReactNode;
  styles?: { [key: string]: any };
}

const StyledDiv: React.FC<Props> = ({ 
  children,
  styles,
}) => {
  return (
    <Div $styles={styles}>
      {children}       
    </Div>
  );
};

export default StyledDiv;