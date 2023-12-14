import React from "react";
import { LoadingWheelWrap } from "./styled";
import theme from "../../theme";

interface Props {
  style?: {[key: string] : any};
  pt?: string;
  mr?: string;
  ml?: string;
  fill?: string;
  width?: string;
  height?: string;
  stroke?: string;
}


const LoadingWheel: React.FC<Props> = ({
  style,
  pt,
  mr,
  ml,
  fill,
  width,
  height,
  stroke,
}) => {
  const overrideStyles = {
    ...style,
    paddingTop: pt,
    marginRight: mr,
    marginLeft: ml,
  };

  const customStyles = {    
    fill: fill,
    width: width,
    height: height,
    stroke: stroke,
  };

  return (
    <LoadingWheelWrap
      style={overrideStyles}
      $customStyles={customStyles}
      theme={theme}
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </LoadingWheelWrap>
  );
};

export default LoadingWheel;