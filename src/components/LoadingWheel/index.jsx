import { LoadingWheelWrap } from "./styled";
import theme from "../../theme";

const LoadingWheel = (props) => {

  const overrideStyles = {
    ...props.style,
    paddingTop: props.pt,
    marginRight: props.mr,
    marginLeft: props.ml,
  };

  const customStyles = {    
    fill: props.fill,
    width: props.width,
    height: props.height,
    stroke: props.stroke,
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