import React, { ReactNode, MouseEvent } from "react";
import { ButtonWrap } from "./styled";
import LoadingWheel from "../LoadingWheel";


interface Props {
  children: ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  bgColor?: string;
  borderColor?: string;
  borderRadius?: string;
  fontSize?: string;
  width?: string;
  height?: string;
  color?: string;
  margin?: string;
  paddingX?: string;
  paddingY?: string;
  active?: boolean;
  submitting?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const BasicButton: React.FC<Props> = ({ 
  children,
  type,
  bgColor,
  borderColor,
  borderRadius,
  fontSize,
  width,
  height,
  color,
  margin,
  paddingX,
  paddingY,
  active,
  submitting,
  onClick
}) => {
  return (
    <ButtonWrap
      $customStyles={{
        bgColor: bgColor,
        borderColor: borderColor,
        borderRadius: borderRadius,
        fontSize: fontSize,
        width: width,
        height: height,
        color: color,
        margin: margin,
        paddingX: paddingX,
        paddingY: paddingY,
      }}
      $active={active}
      $submitting={submitting}
    >
      <button
        className="btn"
        type={type}
        disabled={submitting}
        onClick={onClick}
      >
        {children}
        {submitting && (
          <LoadingWheel
            fill={color}
            width="20px"
            stroke="2px"
            style={{ position: "absolute" }}
          />
        )}
      </button>
    </ButtonWrap>
  );
};

export default BasicButton;