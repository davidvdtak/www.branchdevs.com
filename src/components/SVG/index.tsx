import React, { ReactNode, MouseEvent } from "react";
import { SVGWrapper } from "./styled";

interface Props {
  children?: ReactNode;
  styles?: { [key: string]: any };
  path?: { [key: string]: any };
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const SVG: React.FC<Props> = ({ 
  children, 
  styles, 
  path, 
  onClick 
}) => {

  return (
    <SVGWrapper onClick={onClick} $customStyles={styles} $pathStyles={path}>
      {children}
    </SVGWrapper>
  );
};

export default SVG;
